<template>
  <!--banner主图-->
  <div class="banner">
    <div class="banner-container">
      <div class="banner-title">BANNER TITLE</div>
      <div class="banner-img">
        <van-image width="100%" height="100%"/>
        <div class="banner-btn">立即选购
          <svg-icon name="icon-tuxing"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Banner'
  }
</script>

<style lang="less" scoped>
  .banner {
    margin: @gutter-16 @gutter-16 0;

    .banner-title {
      font-size: @font20;
      font-weight: @fw-500;
    }

    .banner-img {
      position: relative;
      background-color: #ecedef;
      height: 320px;
      margin-top: @gutter-16;

      .banner-btn {
        position: absolute;
        left: 18px;
        bottom: 24px;
        background-color: @primary;
        color: #fff;
        padding: @gutter-8 @gutter-24;

        .iconfont {
          font-size: @font22;
          vertical-align: -6px;
        }
      }
    }
  }
</style>