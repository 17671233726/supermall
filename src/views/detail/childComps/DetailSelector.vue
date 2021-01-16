<template>
  <div class="detail_selector" v-if="Object.keys(skuInfo).length !== 0">
    <div class="select_info">
      <div class="goods_img">
        <img :src="currentGoods.img" />
      </div>
      <div class="goods_info">
        <div class="price">
          <span class="priceIcon">￥</span
          >{{ formatPrice(currentGoods.nowprice) }}
        </div>
        <div class="stock">库存{{ currentGoods.stock }}件</div>
        <div class="selector">
          已选:{{ '"' + this.currentStyle + '""' + this.currentSize + '"' }}
        </div>
      </div>
    </div>
    <Scroll class="select_scroll">
      <div class="color">
        <div class="lable">{{ skuInfo.props[0].label }}</div>
        <div class="style">
          <div
            v-for="(style, i) in skuInfo.props[0].list"
            @click="styleClick(style.name, i)"
            :class="{ active: i == styleCurrentIndex }"
          >
            {{ style.name }}
          </div>
        </div>
      </div>

      <div class="goods_size">
        <div class="lable">{{ skuInfo.props[1].label }}</div>
        <div class="size">
          <div
            v-for="(size, i) in sizeList"
            @click="sizeClick(size.size, i)"
            :class="{ active: i == sizeCurrentIndex }"
          >
            {{ size.size }}
          </div>
        </div>
      </div>

      <div class="buyCount">
        <div class="text">购买数量</div>
        <div class="counter">
          <div class="decrement" @click="decrement">-</div>
          <div class="count">{{ count }}</div>
          <div class="increment" @click="increment">+</div>
        </div>
      </div>
    </Scroll>

    <div class="determine_buy" @click="determineBuy">确定</div>

    <div class="close" @click="close">x</div>
  </div>
</template>
<script>
import Scroll from "components/common/scroll/Scroll";
export default {
  name: "DetailSelector",
  components: {
    Scroll,
  },
  props: {
    skuInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      currentStyle: null,
      currentSize: null,
      styleCurrentIndex: 0,
      sizeCurrentIndex: 0,
      count: 1,
    };
  },
  computed: {
    sizeList() {
      return this.skuInfo.skus.filter((v) => v.style == this.currentStyle);
    },
    currentGoods() {
      return this.skuInfo.skus.filter(
        (v) => v.style == this.currentStyle && v.size == this.currentSize
      )[0];
    },
  },
  methods: {
    formatPrice(price) {
      return (
        (price + "").substring(0, (price + "").length - 2) +
        "." +
        (price + "").substring((price + "").length - 2)
      );
    },
    styleClick(styleName, i) {
      this.currentStyle = styleName;
      this.styleCurrentIndex = i;
    },
    sizeClick(sizeName, i) {
      this.currentSize = sizeName;
      this.sizeCurrentIndex = i;
    },
    decrement() {
      if (this.count > 1) {
        this.count--;
      }
    },
    increment() {
      this.count++;
    },
    close() {
      this.$emit("selectClose");
    },
    determineBuy() {
      let selectInfo = {
        img: this.currentGoods.img,
        price: this.formatPrice(this.currentGoods.nowprice),
        style: this.currentGoods.style,
        size: this.currentGoods.size,
        count: this.count,
        stockId: this.currentGoods.stockId,
      };
      this.$emit("determine", selectInfo);
    },
  },
  watch: {
    skuInfo() {
      this.currentStyle = this.skuInfo.props[0].list[0].name;
      this.currentSize = this.sizeList[0].size;
    },
  },
};
</script>

<style scoped>
.detail_selector {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 75%;
  padding: 15px 10px 0 10px;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  background-color: #fff;
}
.select_info {
  display: flex;
  margin-bottom: 20px;
}
img {
  width: 35vw;
  height: 28vh;
  border-radius: 5px;
}
.goods_info .price {
  color: var(--color-high-text);
  font-size: 22px;
  font-weight: bold;
  margin: 10px;
}
.goods_info .priceIcon {
  font-size: 14px;
}
.goods_info .stock {
  font-size: 14px;
  color: #999;
  margin: 5px 10px;
}
.goods_info .selector {
  color: var(--color-high-text);
  font-size: 14px;
  margin: 8px 10px;
}
.style,
.size {
  display: flex;
  flex-wrap: wrap;
}
.style div,
.size div {
  font-size: 15px;
  padding: 5px 15px;
  margin: 10px 15px;
  border-radius: 5px;
  font-size: 14px;
  border: 1px solid #efefef;
  background-color: #efefef;
}
.lable {
  font-size: 16px;
  color: #666;
}
.goods_size {
  margin-top: 15px;
}
.detail_selector .active {
  border-color: var(--color-high-text);
  color: var(--color-high-text);
  background-color: #fff;
}
.buyCount {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.buyCount .counter {
  display: flex;
}
.counter > div {
  width: 30px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  background-color: #efefef;
}
.decrement,
.increment {
  font-size: 20px;
}
.counter .count {
  margin: 0 2px;
  font-size: 15px;
}
.decrement {
  border-radius: 10px 0 0 10px;
  border-right: none;
}
.increment {
  border-radius: 0 10px 10px 0;
  border-left: none;
}
.determine_buy {
  width: 80%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  color: #fff;
  transform: translate(-50%);
  margin-left: 50%;
  margin-bottom: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 18px;
  background-color: var(--color-high-text);
}
.select_scroll {
  height: 30vh;
  overflow: hidden;
}
.close {
  width: 18px;
  height: 18px;
  text-align: center;
  border-radius: 50%;
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 14px;
  color: #999;
  border: 1px solid #999;
}
</style>