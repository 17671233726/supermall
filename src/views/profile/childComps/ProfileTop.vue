<template>
  <div class="profile_top">
    <div class="user_img"><img :src="userInfo?userInfo.avatarUrl:'~assets/img/profile/avatar.svg'" /></div>
    <div class="user_info">
      <div class="login">{{userInfo?userInfo.name:'注册/登录'}}</div>
      <div class="user_phone">
        <img src="~assets/img/profile/phone.svg" />暂无绑定手机号
      </div>
    </div>
    <div class="more" @click="changeUserInfo">></div>
  </div>
</template>

<script>
export default {
  name: "ProfileTop",
  props:{
    userInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    changeUserInfo(){
      // console.log("用户信息");
    }
  }
};
</script>

<style scoped>
.profile_top {
  background-color: var(--color-tint);
  color: #fff;
  display: flex;
  padding: 10px 15px;
}
.user_img {
  width: 70px;
  height: 70px;
  overflow: hidden;
  border-radius: 50%;
  flex: 1.1;
}
.user_img img {
  width: 100%;
  height: 100%;
}
.user_info {
  display: flex;
  flex: 4;
  margin-left: 10px;
  flex-direction: column;
}
.user_info > div {
  flex: 1;
}
.user_phone {
  font-size: 14px;
}
.user_phone img {
  width: 22px;
  height: 22px;
}
.login {
  display: flex;
  align-items: center;
  padding-left: 5px;
  font-size: 15px;
}
.more {
  display: flex;
  align-items: center;
  font-size: 22px;
}
</style>