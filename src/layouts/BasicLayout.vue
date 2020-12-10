<template>
  <div class="basic-layout app-wrapper">
    <!--app-main-->
    <app-main/>
    <!--tabbar-->
    <van-tabbar route active-color="#24292e" inactive-color="#6a737d" fixed placeholder>
      <van-tabbar-item name="home" replace to="/home">
        <svg-icon slot="icon" name="icon-home"/>
        首页
      </van-tabbar-item>
      <van-tabbar-item name="category" replace to="/category">
        <svg-icon slot="icon" name="icon-category"/>
        分类
      </van-tabbar-item>
      <van-tabbar-item name="news" replace to="/news">
        <svg-icon slot="icon" name="icon-vehivles"/>
        发现
      </van-tabbar-item>
      <van-tabbar-item name="cart" badge="5" replace to="/cart">
        <svg-icon slot="icon" name="icon-Newuserzone"/>
        购物袋
      </van-tabbar-item>
      <van-tabbar-item name="mine" replace to="/mine">
        <svg-icon slot="icon" name="icon-account"/>
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  // components
  import AppMain from './components/AppMain'

  export default {
    name: 'basic-layout',
    components: {
      AppMain
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .app-wrapper {
    position: relative;
    height: 100%;
  }

  .van-tabbar-item {
    .van-info {
      right: 4px;
      margin-top: 8px;
    }
  }

  .van-tabbar-item--active {
    font-weight: 500;
  }

  .van-tabbar-item__icon {
    .iconfont {
      font-size: inherit;
    }
  }
</style>
