<template>
  <div class="detail_shop_info">
    <div class="shop_head">
      <div class="shop_img"><img :src="shop.logo" /></div>
      <span class="shop_name">{{ shop.name }}</span>
    </div>
    <div class="shop_info">
      <div class="shop_num">
        <div class="total_sales">
          <p>{{ shop.fans | rounding }}</p>
          <p>总销量</p>
        </div>
        <div class="total_goods">
          <p>{{ shop.goodsCount | rounding }}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="shop_score">
        <div v-for="item in shop.score">
          <span class="name">{{ item.name }}</span>
          <span class="score" :class="{ betterColor: item.isBetter }">{{
            item.score
          }}</span>
          <span class="isBetter" :class="{ betterBg: item.isBetter }">{{
            item.isBetter ? "高" : "低"
          }}</span>
        </div>
      </div>
    </div>
    <div class="enter_store">进店逛逛</div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    rounding(num) {
      return num >= 10000 ? (num / 10000).toFixed(2) + "万" : num;
    },
  },
};
</script>

<style scoped>
.detail_shop_info {
  padding: 20px;
  border-bottom: 3px solid #eee;
}
.shop_head {
  display: flex;
  margin: 8px 0 15px 0;
}
.shop_head img {
  width: 100%;
  height: 100%;
}
.shop_img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #999;
}
.shop_name {
  line-height: 60px;
  font-size: 16px;
  margin-left: 8px;
  color: black;
}
.shop_info {
  display: flex;
  font-size: 14px;
}
.shop_info > div {
  flex: 1;
}
.shop_num {
  display: flex;
}
.shop_num > div {
  flex: 1;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-evenly;
}
.shop_score {
  border-left: 1px solid #999;
}
.shop_score > div {
  margin-bottom: 8px;
}
.shop_score > div span:nth-child(1) {
  margin-left: 20px;
}
.shop_score > div span:nth-child(2) {
  display: inline-block;
  width: 30px;
}
.shop_score > div span {
  margin-right: 5px;
}
.shop_score .score {
  color: green;
}
.shop_score .isBetter {
  background-color: green;
  color: #fff;
}
.shop_score .betterColor {
  color: red;
}
.shop_score .betterBg {
  background-color: red;
}
.enter_store {
  width: 150px;
  height: 35px;
  line-height: 35px;
  border-radius: 10px;
  text-align: center;
  background-color: rgb(241, 245, 251);
  margin-top: 20px;
  margin-left: 50%;
  transform: translateX(-75px);
}
</style>