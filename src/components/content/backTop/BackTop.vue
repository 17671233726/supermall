<template>
  <div class="back_top">
    <img src="~assets/img/common/top.png" />
  </div>
</template>

<script>
export default {
  name: "BakcTop",
};
</script>

<style scoped>
.back_top {
  position: fixed;
  right: 10px;
  bottom: 60px;
  z-index: 99;
}
.back_top img {
  width: 40px;
  height: 40px;
}
</style>