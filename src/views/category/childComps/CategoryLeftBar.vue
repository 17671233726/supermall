<template>
  <div class="left_bar">
    <div
      class="category_item"
      :class="{ active: index === currentIndex }"
      v-for="(item, index) in categoryList"
      @click="
        itemClick({
          index: index,
          maitKey: item.maitKey,
          miniWallkey: item.miniWallkey,
        })
      "
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryLeftBar",
  props: {
    categoryList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(param) {
      this.currentIndex = param.index;
      this.$emit("itemClick", param);
    },
  },
};
</script>

<style scoped>
.left_bar {
  width: 100%;
}
.category_item {
  height: 44px;
  height: 10%;
  font-size: 14px;
  text-align: center;
  line-height: 44px;
  background-color: #efefef;
}
.active {
  background-color: #fff;
  border-left: 3px solid var(--color-tint);
}
</style>