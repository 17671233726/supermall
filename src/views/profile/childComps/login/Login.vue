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
import { login } from "network/profile";

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
      const res=await login(this.loginForm);
      if(res.status==200){
        Toast("登录成功");
        this.$router.push("/profile");
        this.$bus.$emit("login",res.data.id);
      }
      if(!window.sessionStorage.getItem('token')){
          window.sessionStorage.setItem('token',res.data.token)
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