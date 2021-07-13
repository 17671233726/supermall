<template>
  <div id="detail">
    <DetailNavBar @navItemClick="navItemClick" ref="navbar" />
    <Scroll
      class="detail_scroll"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
    >
      <DetailSwiper :topImages="topImages" />
      <DetailBaseInfo :goods="goods" />
      <DetailShopInfo :shop="shop" />
      <DetailGoodsInfo :detail-info="detailInfo" @imageLoad="imageLoad" />
      <DetailParamInfo ref="params" :paramInfo="paraminfo" />
      <DetailCommentInfo ref="comment" :comment-info="commentInfo" />
      <GoodsList ref="recommend" :goods="recommendInfo" />
    </Scroll>
    <DetailBottomBar @addCart="addToCart" />
    <BackTop v-show="isShow" @click.native="backClick" />
    <!-- <DetailSelector       //添加类名的方式实现弹出选择动画
      class="detail_selector"
      :class="{ select: isSelect }"
      :sku-info="skuInfo"
      @selectClose="close"
      @determine="determineAddToCart"
    /> -->
    <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <!--transition组件的方式实现弹出选择动画-->
      <DetailSelector
        v-show="isSelect"
        class="detail_selector"
        :sku-info="skuInfo"
        @selectClose="close"
        @determine="determineAddToCart"
      />
    </transition>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import GoodsList from "components/content/goodsList/GoodsList";
import DetailSelector from "./childComps/DetailSelector";

import { backTopMixin } from "common/mixin.js";
import { mapActions } from "vuex";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommends,
} from "network/detail";
export default {
  name: "Detail",
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailBottomBar,
    DetailCommentInfo,
    GoodsList,
    DetailSelector,
  },
  mixins: [backTopMixin],
  data() {
    return {
      iid: null,
      topImages: null,
      goods: {},
      shop: {},
      detailInfo: {},
      paraminfo: {},
      commentInfo: {},
      recommendInfo: [],
      navItemTopY: [],
      currentIndex: null,
      skuInfo: {},
      isSelect: false,
    };
  },
  created() {
    this.iid = this.$route.query.iid; //获取商品id
    getDetail(this.iid).then((res) => {
      let data = res.result;
      //获取轮播图信息
      this.topImages = data.itemInfo.topImages;
      //获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //获取店铺信息
      this.shop = new Shop(data.shopInfo);
      //获取商品详情
      this.detailInfo = data.detailInfo;
      //获取商品参数
      this.paraminfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
      this.skuInfo = { props: data.skuInfo.props, skus: data.skuInfo.skus };
    });
    //获取推荐数据
    getRecommends().then((res) => {
      this.recommendInfo = res.data.list;
    });
  },

  methods: {
    ...mapActions(["addCart"]),
    //选择框显示隐藏动画
    //动画进入前
    beforeEnter(el) {
      el.style.bottom = "-75vh";
    },
    //动画进入
    enter(el) {
      el.offsetWidth;
      el.style.bottom = "0";
    },
    //动画离开
    leave(el) {
      el.style.bottom = "-75vh";
    },
    //点击加入购物车显示选择框
    addToCart() {
      this.isSelect = true;
    },
    //关闭选择框
    close() {
      this.isSelect = false;
    },
    //使用vuex加入购物车
    determineAddToCart(goodsinfo) {
      let product = {};
      product.iid = this.iid;
      product.stockId = goodsinfo.stockId;
      product.image = goodsinfo.img;
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = goodsinfo.price;
      product.selected = '"' + goodsinfo.style + '""' + goodsinfo.size + '"';
      product.counter = goodsinfo.count;
      this.addCart(product).then((res) => {
        //actions返回promise
        this.$toast.show(res); //使用封装好的toast组件
      });
    },
    //点击navbar获取当前index,使用index取出数组中对应offsetTop
    navItemClick(index) {
      this.$refs.scroll.scrollTo(0, -this.navItemTopY[index]);
    },
    //监听滚动
    contentScroll(position) {
      let positionY = -position.y;
      for (let i = 0; i < this.navItemTopY.length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.navItemTopY[i] &&
          positionY < this.navItemTopY[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.navbar.currentIndex = this.currentIndex;
        }
      }
      //调用混入mixin中的方法传入position
      this.listenerIsShow(position);
    },
    //图片加载完刷新scroll的高度
    imageLoad() {
      this.$refs.scroll.refresh();
      this.getTabOffsetTop();
    },
    //获取navbar中对应区域的offsetTop
    getTabOffsetTop() {
      this.navItemTopY.push(0);
      this.navItemTopY.push(this.$refs.params.$el.offsetTop - 44);
      this.navItemTopY.push(this.$refs.comment.$el.offsetTop - 44);
      this.navItemTopY.push(this.$refs.recommend.$el.offsetTop - 44);
      this.navItemTopY.push(Number.MAX_VALUE);
    },
  },
};
</script>

<style scoped>
.detail_scroll {
  height: calc(100vh - 93px);
  overflow: hidden;
}
.detail_selector {
  transition: all 0.2s linear;
}
</style>