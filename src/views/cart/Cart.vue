<template>
  <div id="cart">
    <NavBar class="cartNavbar"
      ><div slot="center">购物车({{ cartLength }})</div></NavBar
    >
    <Scroll class="cart_scroll" ref="scroll">
      <CartList />
    </Scroll>
    <CartBottomBar />
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import CartBottomBar from "./childComps/CartBottomBar";

import { mapGetters } from "vuex";
export default {
  name: "Cart",
  components: {
    Scroll,
    NavBar,
    CartList,
    CartBottomBar,
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  computed: {
    ...mapGetters(["cartLength"]),
  },
};
</script>

<style scoped>
.cartNavbar {
  background-color: var(--color-tint);
  color: #fff;
}
.cart_scroll {
  height: calc(100vh - 133px);
  overflow: hidden;
}
</style>