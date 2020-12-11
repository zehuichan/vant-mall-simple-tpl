<template>
  <!--楼层-->
  <div class="floor">
    <div class="floor-container">
      <div class="floor-title">FLOOR ONE</div>
      <div class="floor-img">
        <van-image width="100%" height="100%"/>
        <div class="floor-btn tap-active">了解更多
          <svg-icon name="icon-tuxing"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Floor'
  }
</script>

<style lang="less" scoped>
  .floor {
    margin: @gutter-16 @gutter-16 0;
  }

  .floor-title {
    font-size: @font20;
    font-weight: @fw-500;
  }

  .floor-img {
    position: relative;
    background-color: #ecedef;
    height: 320px;
    margin-top: @gutter-16;
  }

  .floor-btn {
    position: absolute;
    left: 18px;
    bottom: 24px;
    background-color: #fff;
    color: @primary;
    padding: @gutter-8 @gutter-24;

    .iconfont {
      font-size: @font22;
      vertical-align: -6px;
    }
  }
</style>