<template>
  <div id="profile">
    <NavBar class="profile_navbar"><div slot="center">我的</div></NavBar>
    <ProfileTop :userInfo="userInfo" @click.native="handleClick" />
    <ProfileInfo />
    <ProfileOption />
    <button @click="getmoment">get</button>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import ProfileTop from "./childComps/ProfileTop";
import ProfileInfo from "./childComps/ProfileInfo";
import ProfileOption from "./childComps/ProfileOption";
import {getMomentList,getUserInfo} from "network/profile"
export default {
  name: "Profile",
  components: {
    NavBar,
    ProfileTop,
    ProfileInfo,
    ProfileOption,
  },
  data() {
    return {
      userList: null,
      userInfo:null
    };
  },
  async created() {
     const res=await getUserInfo(3);
      this.userInfo=res.data
    this.$bus.$on('login',async (id)=>{
      const res=await getUserInfo(id);
      this.userInfo=res.data
    });
  },
  methods: {
    handleClick() {
      this.$router.push({
        path: "/login",
      });
    },
  async getmoment(){
      console.log(getMomentList);
      const res=await getMomentList();
      console.log(res);
    }
  },
};
</script>

<style scoped>
#profile {
  height: 100vh;
  background-color: #efefef;
}
.profile_navbar {
  background-color: var(--color-tint);
  color: #fff;
}
img {
  width: 100px;
}
</style>