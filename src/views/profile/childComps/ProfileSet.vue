<template>
  <div>
    <NavBar class="profileset_navbar"><div slot="center">设置</div></NavBar>
     <mt-cell title="修改头像"></mt-cell>
    <mt-cell title="修改昵称"></mt-cell>
    <mt-cell title="退出登录" @click.native="logout"></mt-cell>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import { Cell,Toast } from 'mint-ui';
export default {
    name:'ProfileSet',
    components:{
      NavBar,
      [Cell.name]:Cell
    },
    methods:{
      logout(){
        window.sessionStorage.removeItem('token');
        window.sessionStorage.removeItem('userInfo');
        Toast("已退出登录");
        this.$router.push("/profile");
      }
    }
}
</script>

<style scoped>
.profileset_navbar {
  background-color: var(--color-tint);
  color: #fff;
}

</style>