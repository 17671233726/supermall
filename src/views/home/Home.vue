<template>
  <div id="home">
    <NavBar class="homenavbar"><div slot="center">购物街</div></NavBar>
    <TabControl
      class="tabControl1"
      ref="tabControl1"
      @tabClick="tabClick"
      :class="{ fixed: isfixed }"
      v-show="isfixed"
      :titles="['流行', '新款', '精选']"
    />
    <Scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullUp="loadMore"
    >
      <HomeSwiper :banners="banners" @swpImgLoad="swpImgLoad" />
      <Recommends :recommends="recommends" />
      <FeatureView />
      <TabControl
        ref="tabControl2"
        @tabClick="tabClick"
        :titles="['流行', '新款', '精选']"
      />
      <GoodsList :goods="goods[currentType].list" />
    </Scroll>
    <BackTop v-show="isShow" @click.native="backClick" />
  </div>
</template>

<script>
import { backTopMixin } from "common/mixin.js";
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import Recommends from "./childComps/Recommends";
import FeatureView from "./childComps/FeatureView";
import TabControl from "components/content/TabControl";
import GoodsList from "components/content/goodsList/GoodsList";
import Scroll from "components/common/scroll/Scroll";

import { debounce } from "common/utils";
import { getHomeMultiDate, getHomedata } from "network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    Recommends,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
  },
  mixins: [backTopMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      tabOffset: 0,
      isfixed: false,
      saveY: 0,
    };
  },
  created() {
    this._getHomeMultiDate();
    this._getHomedata("pop");
    this._getHomedata("new");
    this._getHomedata("sell");
  },
  mounted() {
    let refresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("itemImgLoad", () => {
      //监听图片加载完调用refresh重新计算scroll高度
      refresh();
    });
  },
  activated() {
    //home激活时使用scrollTo到离开时的位置
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
  },
  deactivated() {
    //离开home页面时保存y的值
    this.saveY = this.$refs.scroll.getScrollY();
  },
  methods: {
    //---------事件相关方法----------------
    swpImgLoad() {
      //图片加载完成获取tabcontrol的offsetTop
      this.tabOffset = this.$refs.tabControl2.$el.offsetTop;
    },
    tabClick(i) {
      //点击切换goods类别
      this.currentType = Object.keys(this.goods)[i];
      this.$refs.tabControl1.currentIndex = i;
      this.$refs.tabControl2.currentIndex = i;
    },
    contentScroll(position) {
      //监听滚动显示隐藏backTop
      this.listenerIsShow(position);
      // console.log();
      this.isfixed = -position.y >= this.tabOffset - 44;
    },
    loadMore() {
      //监听滚动到底部，加载更多
      this._getHomedata(this.currentType);
    },
    //---------网络请求相关方法---------------
    _getHomeMultiDate() {
      //获取轮播图数据
      getHomeMultiDate().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    _getHomedata(type) {
      //获取商品数据
      const page = this.goods[type].page + 1;
      getHomedata(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  /* padding-bottom: 49px; */
}
.homenavbar {
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100; */
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  height: calc(100vh - 93px);
  overflow: hidden;
}
.tabControl1 {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 10;
}
</style>