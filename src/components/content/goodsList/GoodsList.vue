<template>
  <div class="goods_list">
    <GoodsItem class="goods_item" v-for="item in goods" :goodsInfo="item" />
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem";
export default {
  name: "GoodsList",
  components: {
    GoodsItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.goods_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #fff;
}
.goods_item {
  width: 48%;
}
</style>