<template>
  <div class="cart_list">
    <CartListItem v-for="item in cartList" :product="item" />
  </div>
</template>

<script>
import CartListItem from "./CartListItem";

import { mapGetters } from "vuex";
export default {
  name: "CartList",
  components: {
    CartListItem,
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
};
</script>

<style scoped>
</style>