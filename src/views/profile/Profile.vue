<template>
  <div id="profile">
    <NavBar class="profile_navbar"><div slot="center">我的</div></NavBar>
    <ProfileTop />
    <ProfileInfo />
    <ProfileOption />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import ProfileTop from "./childComps/ProfileTop";
import ProfileInfo from "./childComps/ProfileInfo";
import ProfileOption from "./childComps/ProfileOption";
export default {
  name: "Profile",
  components: {
    NavBar,
    ProfileTop,
    ProfileInfo,
    ProfileOption,
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
</style>