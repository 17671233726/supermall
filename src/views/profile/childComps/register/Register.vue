<template>
  <div id="register">
    <NavBar class="register_navbar">
      <div slot="left" class="back" @click="back">
        <img src="~assets/img/common/back.svg" />
      </div>
      <div slot="center">立即注册</div>
    </NavBar>

    <mt-field
      label="用户名"
      placeholder="请输入用户名"
      type="text"
      v-model="registerForm.name"
    ></mt-field>
    <mt-field
      class="pleace_Password"
      label="密码"
      placeholder="请输入密码"
      type="password"
      v-model="registerForm.password"
    ></mt-field>
    <mt-field
      label="密码"
      placeholder="请再次输入密码"
      type="password"
      v-model="registerForm.password2"
    ></mt-field>

    <div class="register_btn">
      <mt-button
        class="registerBtn"
        type="primary"
        size="large"
        @click.native="handleClick"
        >注册</mt-button
      >
    </div>
  </div>
</template>

<script>
import { register } from "network/profile";

import NavBar from "components/common/navbar/NavBar";
import { Field, Button } from "mint-ui";
export default {
  name: "Register",
  components: {
    [Field.name]: Field,
    [Button.name]: Button,
    NavBar,
  },
  data() {
    return {
      registerForm: {
        name: null,
        password: null,
      },
    };
  },
  methods: {
   async handleClick() {
      const res=await register(this.registerForm.name,this.registerForm.password);
      console.log(res);
      // console.log(register);
      // let number = this.registerForm.number;
      // let password = this.registerForm.password;
      // register(number, password).then((res) => {
      //   console.log(res);
      // });
    },
    back() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.register_navbar {
  background-color: var(--color-tint);
  color: #fff;
}
.register_btn {
  padding: 30px 20px;
}
.registerBtn {
  background-color: var(--color-tint);
}
.pleace_Password {
  margin-top: 1px;
}
.register_navbar .back {
  text-align: center;
}
</style>