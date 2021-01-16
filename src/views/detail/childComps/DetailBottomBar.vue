<template>
  <div class="detail_bottom_bar">
    <div class="operation">
      <div class="service">
        <div class="icon"></div>
        <div class="name">客服</div>
      </div>
      <div class="store">
        <div class="icon"></div>
        <div class="name">店铺</div>
      </div>
      <div class="collecter">
        <div class="icon"></div>
        <div class="name">收藏</div>
      </div>
    </div>
    <div class="addAndBuy">
      <div class="addCar" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addCart() {
      this.$emit("addCart");
    },
  },
};
</script>

<style scoped>
.detail_bottom_bar {
  height: 49px;
  font-size: 14px;
  display: flex;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  text-align: center;
}
.detail_bottom_bar > div {
  flex: 1;
  display: flex;
}
.detail_bottom_bar > div > div {
  flex: 1;
}
.operation .icon {
  width: 22px;
  height: 22px;
  background: url("~assets/img/detail/detail_bottom.png") center center
    no-repeat;
  background-size: 22px 150px;
}
.operation > div:nth-child(1) .icon {
  /* background-position: 0 -25px; */
  background-position: 0 -52px;
}
.operation > div:nth-child(2) .icon {
  background-position: 0 -100px;
}
.operation > div:nth-child(3) .icon {
  background-position: 0 0;
}
.operation > div {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.addAndBuy > div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.addAndBuy .addCar {
  background-color: #ffdd0e;
}
.addAndBuy .buy {
  background-color: var(--color-high-text);
  color: #fff;
}
</style>