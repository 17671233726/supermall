<template>
  <mt-swipe class="swiper" :auto="3000">
    <mt-swipe-item class="swiper_item" v-for="item in topImages">
      <img :src="item" />
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
import { Swipe, SwipeItem } from "mint-ui";
export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    "mt-swipe": Swipe,
    "mt-swipe-item": SwipeItem,
  },
};
</script>

<style scoped>
.swiper {
  height: 300px;
  overflow: hidden;
}
.swiper img {
  width: 100%;
}
</style>