<template>
  <div class="goods_item" @click="goodsItemClick">
    <img v-lazy="showImage" @load="imageLoad" />
    <div class="goods_info">
      <p class="title">{{ goodsInfo.title }}</p>
      <span class="price">{{ goodsInfo.price }}</span>
      <span class="collect">{{ goodsInfo.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showImage() {
      return (
        this.goodsInfo.img || this.goodsInfo.image || this.goodsInfo.show.img
      );
    },
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImgLoad");
    },
    goodsItemClick() {
      this.$router.push({
        path: "/detail",
        query: {
          iid: this.goodsInfo.iid,
        },
      });
    },
  },
};
</script>

<style scoped>
.goods_info {
  padding: 8px 0 6px 0;
}
.title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  margin-bottom: 2px;
}
.goods_item img {
  width: 100%;
  border-radius: 8px;
}
.price,
.collect {
  display: inline-block;
  width: 50%;
}
.price {
  color: var(--color-tint);
  padding-left: 10px;
}
.collect {
  text-align: right;
  position: relative;
  padding-right: 10px;
}
.collect::before {
  content: "";
  display: inline-block;
  /* position: absolute;
  left: 40px;
  top: 1px; */
  /* margin-top: 2px; */
  vertical-align: -1px;
  width: 15px;
  height: 15px;
  background-image: url("~assets/img/common/collect.svg");
  background-repeat: no-repeat;
  background-size: 15px 15px;
}
</style>