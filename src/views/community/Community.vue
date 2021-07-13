<template>
  <div>
      <NavBar class="navbar">
          <div slot="left" class="back" @click="back">
        <img src="~assets/img/common/back.svg" />
      </div>
    <div slot="center">蘑菇社区</div>
    </NavBar>
  <input type="file" name="picture" ref="file" @change="upload"> 
  <ul class="contains">
      <li v-for="item in vedio">
          <img v-if="item.type.startsWith('image')" :src="item.fileUrl">
          <video v-else :src="item.fileUrl" controls="controls"></video>
          </li>
  </ul>
  </div>
</template>

<script>
import axios from "axios";
import {getMoment,getVedio} from "network/profile"
import NavBar from "components/common/navbar/NavBar";
export default {
  name:'Community',
  components:{
      NavBar
  },
  data(){
      return {
          vedio:null
      }
  },
  async created(){
    //   const res=await getMoment();
    //   console.log(res)
    const res=await getVedio();
    this.vedio=res.data;
  },
  methods:{
       back() {
      this.$router.back();
    },
    upload(a){
        // var file = this.$refs.file.files[0];
        // var data = new FormData();
        // data.append("file",file);
        const file=a.target.files[0];
        let formData = new FormData();
        formData.append('picture',file);
        let instance=axios.create({
            baseURL:'http://120.79.146.219:8000',
            headers:{"Content-Type":"multipart/form-data",
                        Authorization:window.sessionStorage.getItem('token')
            }
        })
        instance.post('/upload/picture?momentId=2',formData).then(res=>{console.log(res)})
        // axios({
        //     url:'http://120.79.146.219:8000/upload/picture?momentId=2',
        //     method:'post',
        //     data:{
        //         formData
        //     },
        //     headers:{
        //         'Content-Type':'multipart/form-data',
        //         Authorization:window.sessionStorage.getItem('token')
        //     }
        // }).then(res=>{
        //     console.log(res);
        // })
        // console.log(data);
        // console.log(a);
        // console.log("ASas",data)
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: var(--color-tint);
  color: #fff;
}
.contains li{
    margin-top:20px;
}
.contains li > *{
    width:100%;
}
</style>