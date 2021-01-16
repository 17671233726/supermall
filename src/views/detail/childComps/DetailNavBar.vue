<template>
  <div class="detail_navbar">
    <NavBar>
      <div slot="left" class="back" @click="back">
        <img src="~assets/img/common/back.svg" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          class="item"
          @click="titleClick(index)"
          :class="{ active: index == currentIndex }"
        >
          {{ item }}
        </div>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("navItemClick", index);
    },
    back() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.detail_navbar .title {
  display: flex;
}
.detail_navbar .item {
  flex: 1;
}
.detail_navbar .back {
  text-align: center;
}
.active {
  color: var(--color-high-text);
}
</style>