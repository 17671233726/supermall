<template>
  <div class="detail_goods_info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="desc">
      <div class="before"></div>
      <div class="text">{{ detailInfo.desc }}</div>
      <div class="after"></div>
    </div>

    <div class="key">{{ detailInfo.detailImage[0].key }}</div>

    <div class="goods_img">
      <img
        v-for="item in detailInfo.detailImage[0].list"
        :src="item"
        @load="imgLoad"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      counter: 0,
      imgLength: 0,
    };
  },
  methods: {
    imgLoad() {
      if (++this.counter === this.imgLength) {
        this.$emit("imageLoad");
      }
    },
  },
  watch: {
    detailInfo() {
      this.imgLength = this.detailInfo.detailImage[0].list.length;
    },
  },
};
</script>

<style scoped>
.detail_goods_info {
  padding: 25px 10px 0px;
}
.desc {
  position: relative;
  padding: 10px 0;
}
.before,
.after {
  width: 25%;
  height: 1px;
  position: absolute;
  background-color: black;
}
.before {
  top: 0px;
  left: 0px;
}
.before::before,
.after::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  top: -5px;
  background-color: black;
}
.after::after {
  right: 0px;
}
.after {
  bottom: 0px;
  right: 0px;
}
.goods_img img {
  width: 100%;
}
.key {
  margin: 5px 0;
}
</style>