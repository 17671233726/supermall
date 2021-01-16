<template>
  <Swiper class="detail_swiper">
    <SwiperItem v-for="item in topImages">
      <img :src="item" />
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
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
    Swiper,
    SwiperItem,
  },
};
</script>

<style scoped>
.detail_swiper {
  height: 300px;
  overflow: hidden;
}
</style>