<template>
  <div id="home">
    <NavBar class="homenavbar"><div slot="center">购物街</div></NavBar>
    <Swiper :banners="banners" />
    <Recommends :recommends="recommends" />
    <FeatureView />
    <TabControl class="homeTabCon" :titles="['流行', '新款', '精选']" />
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Swiper from "components/common/swiper/Swiper";
import Recommends from "./childComps/Recommends";
import FeatureView from "./childComps/FeatureView";
import TabControl from "components/content/TabControl";

import { getHomeMultiDate, getHomedata } from "network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    Recommends,
    FeatureView,
    TabControl,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  created() {
    this._getHomeMultiDate();
    this._getHomedata("pop");
    this._getHomedata("new");
    this._getHomedata("sell");
  },
  methods: {
    //---------网络请求相关方法---------------
    _getHomeMultiDate() {
      getHomeMultiDate().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    _getHomedata(type) {
      const page = this.goods[type].page + 1;
      getHomedata(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
}
.homenavbar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
}
.homenavbar {
  background-color: var(--color-tint);
  color: #fff;
}
.homeTabCon {
  position: sticky;
  top: 44px;
}
</style>