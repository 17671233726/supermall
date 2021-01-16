<template>
  <div class="sub_category">
    <SubCategoryItem
      class="subcategory_item"
      v-for="item in subCategory"
      :sub-category-info="item"
    />
  </div>
</template>

<script>
import SubCategoryItem from "./SubCategoryItem";
export default {
  name: "SubCategory",
  components: {
    SubCategoryItem,
  },
  props: {
    subCategory: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.sub_category {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* float: left; */
}
.subcategory_item {
  flex: 1;
  margin: 10px;
}
</style>