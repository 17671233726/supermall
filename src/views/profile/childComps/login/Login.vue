<template>
  <div id="login">
    <NavBar class="login_navbar">
      <div slot="left" class="back" @click="back">
        <img src="~assets/img/common/back.svg" />
      </div>
      <div slot="center">登录</div>
    </NavBar>
    <mt-field
      label="用户名"
      placeholder="请输入用户名"
      type="text"
      v-model="loginForm.name"
    ></mt-field>
    <mt-field
      class="mt-field-pass"
      label="密码"
      placeholder="请输入密码"
      type="password"
      v-model="loginForm.password"
    ></mt-field>

    <router-link class="go_register" to="/register" tag="a"
      >没有账号？去注册</router-link
    >

    <div class="login_btn">
      <mt-button
        class="loginBtn"
        type="primary"
        size="large"
        @click.native="handleClick"
        >登录</mt-button
      >
    </div>
  </div>
</template>

<script>
import { login,getUserInfo } from "network/profile";

import NavBar from "components/common/navbar/NavBar";
import { Field, Button,Toast } from "mint-ui";
export default {
  name: "Login",
  components: {
    [Field.name]: Field,
    [Button.name]: Button,
    NavBar,
  },
  data() {
    return {
      loginForm: {
        name: 'user',
        password: '123456',
      },
    };
  },
  methods: {
   async handleClick() {
    //  const res2=await getUserInfo(3);
    //     console.log(res2);
      const res=await login(this.loginForm);
      if(res){
        window.sessionStorage.setItem('token',res.data.token)
        const res2=await getUserInfo(res.data.id);
        const userInfo={name:res2.data.name,avatarUrl:res2.data.avatarUrl};
        window.sessionStorage.setItem('userInfo',JSON.stringify(userInfo));
        Toast("登录成功");
        this.$router.push("/profile")
      }else{
         Toast("账号或密码不正确");
      }
    },
    back() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.login_navbar {
  background-color: var(--color-tint);
  color: #fff;
}
.login_btn {
  padding: 30px 20px;
}
.loginBtn {
  background-color: var(--color-tint);
}
.login_navbar .back {
  text-align: center;
}
.mt-field-pass {
  margin-bottom: 8px;
}
.go_register {
  margin: 0 20px;
  font-size: 14px;
  color: 666;
}
</style>