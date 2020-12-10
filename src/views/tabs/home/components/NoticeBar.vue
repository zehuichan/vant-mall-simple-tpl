<template>
  <van-notice-bar color="#fff" background="#24292e" wrapable :scrollable="false">
    <van-swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
      <van-swipe-item>12月1日至12月31日期间，我们将暂停银联支付服务，并于1月1日10:00后恢复正常</van-swipe-item>
      <van-swipe-item>我们将于1月13日至12月31日期间暂停次日达、次晨达及次日达服务</van-swipe-item>
    </van-swipe>
  </van-notice-bar>
</template>

<script>
  export default {
    name: 'NoticeBar'
  }
</script>

<style lang="less" scoped>
  .van-notice-bar {
    .notice-swipe {
      height: 50px;
      font-size: 12px;
    }
  }
</style>