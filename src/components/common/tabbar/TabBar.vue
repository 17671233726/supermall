<template>
  <div>
    <div class="tabBar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbar",
};
</script>

<style scoped>
/* @import url(../../assets/css/tabbar/style.css); */
.tabBar {
  height: 49px;
  display: flex;
  flex: 1;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.1);
  z-index: 10;
  background-color: #f6f6f6;
}
</style>