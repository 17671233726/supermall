<template>
  <div class="subcategory_item">
    <a :href="subCategoryInfo.link">
      <img :src="subCategoryInfo.image" @load="imageLoad" />
      <div class="title">{{ subCategoryInfo.title }}</div>
    </a>
  </div>
</template>

<script>
export default {
  name: "SubCategoryItem",
  props: {
    subCategoryInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("subimgLoad");
    },
  },
};
</script>

<style scoped>
.subcategory_item img {
  width: 64px;
  height: 64px;
}
.subcategory_item .title {
  width: 64px;
  font-size: 14px;
  color: #666;
  margin-top: 8px;
  text-align: center;
}
</style>