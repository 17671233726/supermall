<template>
  <div class="TabControl">
    <div
      class="tabItme"
      :class="{ active: i == currentIndex }"
      @click="itemClick(i)"
      v-for="(item, i) in titles"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    itemClick(i) {
      this.currentIndex = i;
    },
  },
};
</script>

<style scoped>
.TabControl {
  display: flex;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tabItme {
  flex: 1;
  text-align: center;
}
.tabItme span {
  padding: 5px 0;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-high-text);
}
</style>