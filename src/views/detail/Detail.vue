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
    <DetailSelector
      class="detail_selector"
      :class="{ select: isSelect }"
      :sku-info="skuInfo"
      @selectClose="close"
      @determine="determineAddToCart"
    />
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
    addToCart() {
      this.isSelect = true;
    },
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
        this.$toast.show(res);
      });
    },
    navItemClick(index) {
      this.$refs.scroll.scrollTo(0, -this.navItemTopY[index]);
    },
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
      this.listenerIsShow(position);
    },
    imageLoad() {
      this.$refs.scroll.refresh();
      this.getTabOffsetTop();
    },
    getTabOffsetTop() {
      this.navItemTopY.push(0);
      this.navItemTopY.push(this.$refs.params.$el.offsetTop - 44);
      this.navItemTopY.push(this.$refs.comment.$el.offsetTop - 44);
      this.navItemTopY.push(this.$refs.recommend.$el.offsetTop - 44);
      this.navItemTopY.push(Number.MAX_VALUE);
    },
    close() {
      this.isSelect = false;
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
  /* height: 0;
  overflow: hidden; */
  /* top: 570px; */
  bottom: -75vh;
  /* top: none;
  bottom: 0; */
  /* top: none;
  bottom: 0; */
  /* bottom: 0; */
  /* top: none; */

  /* bottom: 0; */
}
.select {
  /* top: 142px; */
  bottom: 0;
}
</style>