<template>
  <div class="check_button" :class="{ active: isChecked }">
    <img src="~assets/img/cart/tick.svg" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.check_button {
  width: 20px;
  height: 20px;
  text-align: center;
  border-radius: 50%;
  border: 1px solid #999;
}
.active {
  background-color: red;
  border: none;
}
</style>