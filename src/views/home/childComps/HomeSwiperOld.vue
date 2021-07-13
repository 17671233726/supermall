<template>
  <div class="home_swiper">
    <Swiper>
      <SwiperItem v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" @load="ImgLoad" />
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
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
</style>