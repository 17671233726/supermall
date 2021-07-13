<template>
  <div id="app">
    <transition mode="out-in">
      <keep-alive exclude="Detail">
        <router-view />
      </keep-alive>
    </transition>

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
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.2s;
}
</style>