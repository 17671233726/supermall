<template>
  <tabbar>
    <TabbarItem path="/home">
      <img src="~assets/img/tabbar/home.svg" slot="icon" />
      <img src="~assets/img/tabbar/home_active.svg" slot="active-icon" />
      <div slot="text">首页</div>
    </TabbarItem>
    <TabbarItem path="/category">
      <img src="~assets/img/tabbar/category.svg" slot="icon" />
      <img src="~assets/img/tabbar/category_active.svg" slot="active-icon" />
      <div slot="text">分类</div>
    </TabbarItem>
    <TabbarItem path="/cart">
      <img src="~assets/img/tabbar/shopcart.svg" slot="icon" />
      <img src="~assets/img/tabbar/shopcart_active.svg" slot="active-icon" />
      <div slot="text">购物车</div>
    </TabbarItem>
    <TabbarItem path="/profile">
      <img src="~assets/img/tabbar/profile.svg" slot="icon" />
      <img src="~assets/img/tabbar/profile_active.svg" slot="active-icon" />
      <div slot="text">我的</div>
    </TabbarItem>
  </tabbar>
</template>

<script>
import tabbar from "components/common/tabbar/TabBar";
import TabbarItem from "components/common/tabbar/TabbarItem";
export default {
  name: "mainTabbar",
  components: {
    tabbar,
    TabbarItem,
  },
};
</script>

<style>
</style>