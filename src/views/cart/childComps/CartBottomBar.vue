<template>
  <div class="cart_bottom_bar">
    <div class="check_button">
      <CheckButton :isChecked="isSelectAll" @click.native="selectAll" /><span
        >全选</span
      >
    </div>
    <div class="total">合计:￥{{ totalPrice }}</div>
    <div class="calculate" @click="settlement">去结算({{ totalConut }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
import { mapGetters } from "vuex";
export default {
  name: "CartBottomBar",
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["cartList"]), //映射getters
    totalPrice() {
      //计算总价格
      return this.cartList
        .filter((v) => v.checked)
        .reduce((preValue, item) => preValue + item.price * item.counter, 0);
    },
    totalConut() {
      //计算总数量
      return this.cartList
        .filter((v) => v.checked)
        .reduce((preValue, item) => preValue + item.counter, 0);
    },
    isSelectAll() {
      //返回当前是否全选
      return this.cartList.length == 0
        ? false
        : !this.cartList.find((v) => !v.checked);
    },
  },
  methods: {
    //全选或者全不选，提交actions
    selectAll() {
      this.$store.dispatch("selectAll", !this.isSelectAll);
    },
    settlement() {
      this.$toast.show("购买成功");
    },
  },
};
</script>

<style scoped>
.cart_bottom_bar {
  height: 40px;
  background-color: rgb(237, 237, 237);
  display: flex;
}
.check_button {
  display: flex;
  align-items: center;
  margin-left: 5px;
}
.check_button span {
  margin-left: 5px;
}
.total {
  line-height: 40px;
  flex: 1;
  padding-left: 10px;
}
.calculate {
  line-height: 40px;
  width: 100px;
  text-align: center;
  background-color: red;
  color: #fff;
}
</style>