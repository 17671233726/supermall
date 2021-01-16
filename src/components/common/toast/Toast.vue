<template>
  <div class="toast" v-show="isToast" ref="toastel">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      isToast: false,
    };
  },
  methods: {
    show(message, delay = 1500) {
      this.message = message;
      this.isToast = true;
      setTimeout(() => {
        this.message = "";
        this.isToast = false;
      }, delay);
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  color: #fff;
  padding: 8px 10px;
  border-radius: 10px;
  transform: translate(-50%);
  background-color: rgba(0, 0, 0, 0.7);
}
</style>