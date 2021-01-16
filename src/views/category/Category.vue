<template>
  <div id="category">
    <NavBar class="category_navbar"><div slot="center">商品分类</div></NavBar>
    <Scroll class="leftbar_scroll">
      <CategoryLeftBar :category-list="categoryList" @itemClick="itemClick" />
    </Scroll>
    <TabControl
      v-show="isFixed"
      ref="noneTabControl"
      :titles="['综合', '新品', '销量']"
      @tabClick="tabClick"
    />
    <Scroll
      class="subcate_scroll"
      ref="subScroll"
      :probe-type="3"
      @scroll="subScoll"
    >
      <SubCategory :sub-category="subCategory" />
      <TabControl
        ref="tabControl"
        v-show="!isFixed"
        :titles="['综合', '新品', '销量']"
        @tabClick="tabClick"
      />
      <GoodsList :goods="categoryDetail" />
    </Scroll>
    <BackTop v-show="isShow" @click.native="backClick" />
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import NavBar from "components/common/navbar/NavBar";
import GoodsList from "components/content/goodsList/GoodsList";

import CategoryLeftBar from "./childComps/CategoryLeftBar";
import SubCategory from "./childComps/SubCategory";
import TabControl from "components/content/TabControl";
import CategoryDetail from "./childComps/CategoryDetail";

import { backTopMixin } from "common/mixin";
import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "network/category.js";
export default {
  name: "Category",
  components: {
    Scroll,
    NavBar,
    GoodsList,
    CategoryLeftBar,
    SubCategory,
    TabControl,
    CategoryDetail,
  },
  mixins: [backTopMixin],
  data() {
    return {
      categoryList: null,
      subCategory: null,
      categoryDetail: null,
      miniWallkey: 10062603,
      goodsType: ["pop", "new", "sell"],
      tabOffsetTop: 0,
      isFixed: false,
    };
  },
  mounted() {
    //使用时间总线监听图片加载完成获取tabControl的offsetTop
    this.$bus.$on("subimgLoad", () => {
      if (this.miniWallkey == 10062603) {
        this.tabOffsetTop = 1080;
      } else {
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
      }
    });
  },
  created() {
    //页面加载时请求左侧选项栏数据
    getCategory().then((res) => {
      this.categoryList = res.data.category.list;
    });
    //页面加载时请求第一面maitKey id为3627的subcategory数据
    this._getSubcategory(3627);
    //页面加载时请求第一面miniWallkey id为10062603,类别为pop的detail数据
    this._getCategoryDetail(10062603, "pop");
  },
  methods: {
    //----------------事件相关方法-------------------------------
    itemClick(param) {
      //点击左侧选项栏发出事件携带一个对象参数，对象里有当前选项栏对应的maitKey与miniWallkey
      //使用此时maitKey发送subcategory请求
      this._getSubcategory(param.maitKey);
      //使用此时miniWallkey，默认类别为pop发送detail请求
      this._getCategoryDetail(param.miniWallkey, "pop");
      //将tabcontrol组件的index设置为0,点击左侧选项栏时默认加载第一项pop类别的数据
      this.$refs.tabControl.currentIndex = 0;
      this.$refs.noneTabControl.currentIndex = 0;
      //点击左侧选项栏切换分类时将滚动至为0
      this.$refs.subScroll.scrollTo(0, 0, 0);
      //将此时miniWallkey存储起来，点击tabControl时发送参数为此miniWallkey的请求
      this.miniWallkey = param.miniWallkey;
    },
    tabClick(i) {
      //点击tabControl，发送this中存储的miniWallkey，类别为携带index所对应的类别的请求
      this._getCategoryDetail(this.miniWallkey, this.goodsType[i]);
      //点击tabControl同步两个的激活状态
      this.$refs.noneTabControl.currentIndex = i;
      this.$refs.tabControl.currentIndex = i;
    },
    //监听滚动到tabControl的位置时给isFixed赋值，隐藏的tabControl出现
    subScoll(position) {
      this.isFixed = -position.y > this.tabOffsetTop;
      //监听滚动 backTop的显示与隐藏 (使用mixin)
      this.listenerIsShow(position);
    },
    backClick() {
      //点击返回到顶部
      this.$refs.subScroll.scrollTo(0, 0, 300);
    },
    //-----------------------网络请求相关方法---------------------------------------
    //请求subCategory数据
    _getSubcategory(maitKey) {
      getSubcategory(maitKey).then((res) => {
        this.subCategory = res.data.list;
      });
    },
    //请求categoryDetail数据
    _getCategoryDetail(miniWallkey, type) {
      getCategoryDetail(miniWallkey, type).then((res) => {
        this.categoryDetail = res;
      });
    },
  },
};
</script>

<style scoped>
.category_navbar {
  background-color: var(--color-tint);
  color: #fff;
}
.leftbar_scroll,
.subcate_scroll {
  height: calc(100vh - 93px);
  float: left;
  overflow: hidden;
}
.leftbar_scroll {
  width: 30%;
  background-color: #efefef;
}
.subcate_scroll {
  width: 70%;
}
</style>