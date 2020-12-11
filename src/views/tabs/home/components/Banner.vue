<template>
  <!--banner主图-->
  <div class="banner">
    <van-swipe class="banner-swipe" :autoplay="3000" @change="onChange">
      <van-swipe-item>
        <div class="banner-container">
          <div class="banner-title">BANNER TITLE A</div>
          <div class="banner-img">
            <van-image width="100%" height="100%"/>
            <div class="banner-btn tap-active">立即选购
              <svg-icon name="icon-tuxing"/>
            </div>
          </div>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="banner-container">
          <div class="banner-title">BANNER TITLE B</div>
          <div class="banner-img">
            <van-image width="100%" height="100%"/>
            <div class="banner-btn tap-active">立即选购
              <svg-icon name="icon-tuxing"/>
            </div>
          </div>
        </div>
      </van-swipe-item>
      <template #indicator>
        <div class="banner-indicator">
          <span class="dot" :class="current == index ? 'active' : ''" v-for="(dot, index) in 2" :key="dot"></span>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script>
  export default {
    name: 'Banner',
    data() {
      return {
        current: 0
      }
    },
    methods: {
      onChange(index) {
        this.current = index
      }
    }
  }
</script>

<style lang="less" scoped>
  .banner {
    margin: @gutter-16 @gutter-16 0;
  }

  .banner-title {
    font-size: @font20;
    font-weight: @fw-500;
  }

  .banner-img {
    position: relative;
    background-color: #ecedef;
    height: 320px;
    margin-top: @gutter-16;
  }

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

  .banner-indicator {
    padding: @gutter-8 0;
    text-align: center;

    .dot {
      display: inline-block;
      width: 20px;
      height: 2px;
      background-color: #6a737d;
    }

    .dot + .dot {
      margin-left: 3px;
    }

    .dot.active {
      height: 4px;
      background-color: @primary;
    }
  }
</style>