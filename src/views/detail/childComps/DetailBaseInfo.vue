<template>
  <div class="base_info" v-if="Object.keys(goods).length !== 0">
    <div class="goods_info">
      <div class="goods_desc">{{ goods.title }}</div>
      <span class="goods_price">￥{{ goods.realPrice }}</span>
      <span class="goods_old_price">{{ goods.oldPrice }}</span>
      <span
        class="discount"
        :style="{ backgroundColor: goods.discountBgColor }"
        >{{ goods.discount }}</span
      >
    </div>
    <div class="record">
      <div v-for="num in 2">{{ goods.columns[num - 1] }}</div>
      <div>
        {{ !this.goods.services[3] ? "" : this.goods.services[3].name }}
      </div>
    </div>
    <div class="express">
      <div v-for="num2 in 3">
        <img :src="goods.services[num2 - 1].icon" />
        {{ goods.services[num2 - 1].name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.base_info {
  padding: 10px 6px 0;
}
.goods_desc {
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 40px;
  white-space: wrap;
  color: black;
  margin-bottom: 8px;
}
.goods_price {
  color: var(--color-high-text);
  font-size: 20px;
  font-weight: bold;
}
.goods_old_price {
  text-decoration: line-through;
  font-size: 14px;
}
.goods_price,
.goods_old_price {
  margin-right: 6px;
}
.discount {
  /* background-color: var(--color-high-text); */
  color: #fff;
  border-radius: 10px;
  padding: 2px 4px;
  font-size: 13px;
}
.record {
  display: flex;
  font-size: 14px;
  margin: 15px 0 10px 0;
}
.record > div {
  flex: 1;
}
.record > div:nth-child(2) {
  text-align: center;
}
.record > div:nth-child(3) {
  text-align: right;
}
.express {
  display: flex;
  font-size: 14px;
  color: #000;
  padding: 15px 0;
  border: 1px solid #999;
  border-left: none;
  border-right: none;
}
.express img {
  width: 15px;
  height: 15px;
}
.express > div {
  flex: 1;
}
</style>