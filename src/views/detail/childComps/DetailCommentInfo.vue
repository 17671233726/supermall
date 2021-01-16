<template>
  <div class="detail_comment_info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="comment_header">
      <div class="text">用户评价</div>
      <div class="more">更多&gt;</div>
    </div>
    <div class="user_info">
      <div class="user_img"><img :src="commentInfo.user.avatar" /></div>
      <div class="user_name">{{ commentInfo.user.uname }}</div>
    </div>
    <div class="comment_content">{{ commentInfo.content }}</div>
    <div class="info">
      <span class="comment_time">{{ commentInfo.created | showData }}</span>
      <span class="style">{{ commentInfo.style }}</span>
    </div>
    <div class="comment_img" v-if="commentInfo.images">
      <img :src="item" v-for="item in commentInfo.images" />
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils";
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showData(time) {
      const date = new Date(time * 1000);
      return formatDate(date, "yyyy/MM/dd hh:mm:ss");
    },
  },
};
</script>

<style scoped>
.detail_comment_info {
  padding: 15px;
}
.comment_header {
  display: flex;
  height: 50px;
  border-bottom: 2px solid #eee;
  align-items: center;
}
.comment_header > div {
  flex: 1;
}
.comment_header .more {
  text-align: right;
}
.user_info {
  display: flex;
  align-items: center;
  padding: 10px 0;
}
.user_img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.user_img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.comment_content {
  padding: 6px 0;
  font-size: 14px;
}
.info {
  font-size: 14px;
  color: #999;
}
.info .comment_time {
  margin-right: 8px;
}
.comment_img {
  height: 80px;
  margin-top: 5px;
}
.comment_img img {
  height: 100%;
  margin-right: 10px;
}
</style>