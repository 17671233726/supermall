<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>

    <mainTabbar v-if="$route.meta.showTabbar" />
  </div>
</template>

<script>
import mainTabbar from "components/content/mainTabbar";
export default {
  name: "App",
  components: {
    mainTabbar,
  },
};
</script>

<style scoped>
@import "assets/css/base.css";
</style>