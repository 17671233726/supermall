<template>
  <div class="profile_info">
    <div class="balance">
      <div class="price">0.00元</div>
      <div>我的余额</div>
    </div>
    <div class="discount">
      <div class="count">0个</div>
      <div>我的优惠</div>
    </div>
    <div class="integral">
      <div>0分</div>
      <div>我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileInfo",
};
</script>

<style scoped>
.profile_info {
  display: flex;
  position: relative;
  /* height: 100px; */
  background-color: #fff;
  text-align: center;
  padding: 20px 0;
  /* border-bottom: 15px solid #eee; */
}
.profile_info > div {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.profile_info > div > div {
  flex: 1;
}
.profile_info > div > div:nth-child(1) {
  color: var(--color-high-text);
  font-weight: bold;
  font-size: 18px;
}
.profile_info > div > div:nth-child(2) {
  margin-top: 5px;
  font-size: 14px;
}
.profile_info > div:nth-child(2)::before,
.profile_info > div:nth-child(2)::after {
  content: "";
  display: block;
  width: 0.5px;
  height: 81px;
  position: absolute;
  top: 0;
  left: 33.33%;
  background-color: #eee;
}
.profile_info > div:nth-child(2)::after {
  left: 66.66%;
}
</style>