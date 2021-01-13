<template>
  <div class="basic-layout app-wrapper">
    <!--app-main-->
    <app-main/>
    <!--tabbar-->
    <van-tabbar route fixed placeholder active-color="#24292e" inactive-color="#6a737d">
      <van-tabbar-item name="home" replace to="/home">
        <template #icon>
          <svg-icon name="icon-home"/>
        </template>
        首页
      </van-tabbar-item>
      <van-tabbar-item name="category" replace to="/category">
        <template #icon>
          <svg-icon name="icon-category"/>
        </template>
        分类
      </van-tabbar-item>
      <van-tabbar-item name="news" replace to="/news">
        <template #icon>
          <svg-icon name="icon-vehivles"/>
        </template>
        发现
      </van-tabbar-item>
      <van-tabbar-item name="cart" badge="5" replace to="/cart">
        <template #icon>
          <svg-icon name="icon-Newuserzone"/>
        </template>
        购物袋
      </van-tabbar-item>
      <van-tabbar-item name="mine" replace to="/mine">
        <template #icon>
          <svg-icon name="icon-account"/>
        </template>
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
