<template>
  <div class="recommends">
    <div class="recommendItem" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommends",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommends {
  display: flex;
  background-color: #fff;
  padding-bottom: 15px;
  margin-bottom: 8px;
}
.recommendItem {
  flex: 1;
  text-align: center;
}
.recommendItem img {
  width: 70px;
  height: 70px;
  margin: 10px 0;
}
</style>