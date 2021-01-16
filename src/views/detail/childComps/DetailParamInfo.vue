<template>
  <div class="params-info" v-if="Object.keys(paramInfo).length !== 0">
    <table class="size">
      <tr v-for="item in paramInfo.sizes[0]">
        <td v-for="item2 in item">{{ item2 }}</td>
      </tr>
    </table>
    <table class="params">
      <tr v-for="item in paramInfo.infos">
        <td v-for="value in item">{{ value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      preson: {
        name: "张三",
        sex: "男",
        age: 18,
        salary: 1500,
      },
    };
  },
};
</script>

<style scoped>
.params-info {
  margin-top: 20px;
  border-bottom: 5px solid #eee;
  padding: 15px 0;
  border-top: 4px solid #eee;
}
table {
  border-collapse: collapse;
  font-size: 14px;
}
table tr {
  border-bottom: 1px solid #ccc;
  height: 40px;
}
.size td {
  width: 60px;
}
.size td:nth-child(1) {
  width: 135px;
  padding-left: 10px;
}
.size td:last-child {
  width: 108px;
}
.params td {
  width: 262px;
  color: var(--color-tint);
}
.params td:nth-child(1) {
  width: 100px;
  color: #333;
  padding-left: 10px;
}
</style>