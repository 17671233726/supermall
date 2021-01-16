<template>
  <div class="profile_option">
    <div><img src="~assets/img/profile/message.svg" />我的消息</div>
    <div><img src="~assets/img/profile/pointer.svg" />积分商城</div>
    <div><img src="~assets/img/profile/vip.svg" />会员卡</div>
    <div><img src="~assets/img/profile/cart.svg" />我的购物车</div>
    <div><img src="~assets/img/profile/shopping.svg" />下载购物APP</div>
  </div>
</template>

<script>
export default {
  name: "ProfileOption",
};
</script>

<style scoped>
.profile_option {
  display: flex;
  font-size: 15px;
  margin-top: 15px;
  flex-direction: column;
}
.profile_option > div {
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  background-color: #fff;
  border-bottom: 1px solid #efefef;
}
.profile_option > div > img {
  width: 22px;
  height: 22px;
  margin-right: 6px;
}
.profile_option > div:nth-last-child(2) {
  margin-top: 15px;
}
</style>