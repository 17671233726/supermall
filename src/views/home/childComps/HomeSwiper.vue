<template>
  <div id="home_swiper">
    <mt-swipe class="swiper" :auto="3000">
      <mt-swipe-item class="swiper_item" v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" @load="ImgLoad" />
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";
export default {
  name: "HomeSwiper",
  components: {
    "mt-swipe": Swipe,
    "mt-swipe-item": SwipeItem,
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      isLoad: false,
    };
  },
  methods: {
    ImgLoad() {
      if (!this.isLoad) {
        this.$emit("swpImgLoad");
        this.isLoad = true;
      }
    },
  },
};
</script>

<style scoped>
.swiper {
  height: 195.18px;
}
.swiper_item {
  height: 100%;
}
#home_swiper img {
  width: 100%;
}
</style>