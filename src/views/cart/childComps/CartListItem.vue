<template>
  <div class="cart_list_item">
    <div class="item_selector">
      <CheckButton :is-checked="product.checked" @click.native="checkClick" />
    </div>
    <div class="goods_img" @click="cartitemClick">
      <img :src="product.image" />
    </div>
    <div class="goods_info" @click="cartitemClick">
      <div class="goods_title">{{ product.title }}</div>
      <div class="goods_desc">{{ product.desc }}</div>
      <div class="selected">已选{{ product.selected }}</div>
      <div>
        <span class="price">￥{{ product.price }}</span>
        <span class="counter">x{{ product.counter }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  name: "CartListItem",
  components: {
    CheckButton,
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    checkClick() {
      this.$store.commit("changeChecked", this.product);
    },
    cartitemClick() {
      this.$router.push({
        path: "/detail",
        query: {
          iid: this.product.iid,
        },
      });
    },
  },
};
</script>

<style scoped>
.cart_list_item {
  display: flex;
  padding: 10px 5px;
  height: 125px;
  /* background-color: lawngreen; */
}
.item_selector {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
/* .cart_list_item > div {
  flex: 1;
} */
.goods_img {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10px;
}
.goods_img img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.goods_info {
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
}
.goods_title,
.goods_desc {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* width: 50px; */
  /* font-size: 14px; */
}
.goods_desc {
  font-size: 14px;
  color: #999;
}
.goods_info .selected {
  font-size: 14px;
}
.price {
  float: left;
  font-size: 18px;
  color: var(--color-high-text);
  font-weight: bold;
}
.counter {
  float: right;
  font-size: 16px;
}
</style>