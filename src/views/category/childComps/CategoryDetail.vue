<template>
  <div class="category_detail"></div>
</template>

<script>
export default {
  name: "CategoryDetail",
  props: {
    categotyDetail: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
</style>