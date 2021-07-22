<template>
  <div>
    <NavBar class="navbar">
      <div slot="left" class="back" @click="back">
        <img src="~assets/img/common/back.svg" />
      </div>
      <div slot="center">蘑菇社区</div>
    </NavBar>
    <input type="file" name="picture" ref="file" @change="upload" />
    <textarea v-model="content" class="momentContent"></textarea>
    <mt-button type="primary" size="large" @click="startUpload">上传</mt-button>
    <ul class="contains">
      <li v-for="item in vedio" :key="item.fileUrl">
        <img v-if="item.type.startsWith('image')" :src="item.fileUrl" />
        <video v-else :src="item.fileUrl" controls="controls"></video>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

import { getMoment, getVedio, publishMoment } from "network/profile";
import NavBar from "components/common/navbar/NavBar";
import { Button, Toast } from "mint-ui";
export default {
  name: "Community",
  components: {
    NavBar,
    [Button.name]: Button,
  },
  data() {
    return {
      vedio: null,
      selected: 1,
      formData: null,
      content: "",
    };
  },
  async created() {
    const res = await getVedio();
    this.vedio = res.data;
  },
  methods: {
    back() {
      this.$router.back();
    },
    startUpload() {
      if(!window.sessionStorage.getItem('token')){
        Toast("请先登录");
        return this.$router.push('/login');
      }
      if (this.content.trim() == "") {
       return Toast("动态内容不能为空");
      }
       publishMoment(this.content).then(res=>{
        let momentId=res.data.insertId
        const formData = this.formData;
        let instance = axios.create({
          baseURL: "http://120.79.146.219:8000",
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: window.sessionStorage.getItem("token"),
          },
          onUploadProgress(progressEvent) {
            if (progressEvent.lengthComputable) {
              if (progressEvent.loaded == progressEvent.total) {
                Toast("上传成功");
              }
            }
          },
        });
        instance.post(`/upload/picture?momentId=${momentId}`, formData).then((res) => {
          console.log(res);
        });
       })
      
    },
    upload(a) {
      const file = a.target.files[0];
      this.formData = new FormData();
      this.formData.append("picture", file);
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: var(--color-tint);
  color: #fff;
}
.contains li {
  margin-top: 20px;
}
.contains li > * {
  width: 100%;
}
.momentContent {
  width: 100vw;
  height: 100px;
}
</style>