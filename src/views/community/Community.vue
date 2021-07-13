<template>
  <div>
      <NavBar class="navbar">
          <div slot="left" class="back" @click="back">
        <img src="~assets/img/common/back.svg" />
      </div>
    <div slot="center">蘑菇社区</div>
    </NavBar>
  <input type="file" name="picture" ref="file" @change="upload"> 
  <mt-button type="primary" size="large" @click="startUpload">上传</mt-button>
  <ul class="contains">
      <li v-for="item in vedio">
          <img v-if="item.type.startsWith('image')" :src="item.fileUrl">
          <video v-else :src="item.fileUrl" controls="controls"></video>
          </li>
  </ul>
  <mt-navbar v-model="selected">
  <mt-tab-item id="1">图片</mt-tab-item>
  <mt-tab-item id="2">视频</mt-tab-item>
</mt-navbar>

<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
   内容1
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
   内容2
  </mt-tab-container-item>
</mt-tab-container>

  </div>
</template>

<script>
import axios from "axios";
import {getMoment,getVedio} from "network/profile"
import NavBar from "components/common/navbar/NavBar";
import { Navbar, TabItem,TabContainer, TabContainerItem,Button,Toast } from 'mint-ui';
export default {
  name:'Community',
  components:{
      NavBar,
      [Navbar.name]:Navbar,
      [TabItem.name]:TabItem,
      [TabContainer.name]:TabContainer,
      [TabContainerItem.name]:TabContainerItem,
      [Button.name]:Button
  },
  data(){
      return {
          vedio:null,
          selected:1,
          formData:null
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
    startUpload(){
      const formData=this.formData;
      let instance=axios.create({
            baseURL:'http://120.79.146.219:8000',
            headers:{"Content-Type":"multipart/form-data",
                        Authorization:window.sessionStorage.getItem('token')
            },
            onUploadProgress(progressEvent){
               if (progressEvent.lengthComputable) {
                 if(progressEvent.loaded==progressEvent.total){
                   Toast("上传成功");
                 }
                  
              }
      }
        })
        instance.post('/upload/picture?momentId=2',formData).then(res=>{console.log(res)})
    },
    upload(a){
        const file=a.target.files[0];
        this.formData = new FormData();
        this.formData.append('picture',file);
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