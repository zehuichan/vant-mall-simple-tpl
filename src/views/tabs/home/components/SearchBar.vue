<template>
  <div class="search-bar-placeholder">
    <div class="search-bar fixed">
      <div class="search-icon tap-active">
        <svg-icon name="icon-scanning"/>
      </div>
      <div class="search-field search-field__value">
        <van-search :label="city" placeholder="搜索" readonly/>
      </div>
      <div class="search-icon tap-active">
        <van-badge dot color="#24292e">
          <svg-icon name="icon-comments"/>
        </van-badge>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SearchBar',
    data() {
      return {
        city: '广州'
      }
    }
  }
</script>

<style lang="less" scoped>
  .search-bar-placeholder {
    height: 54px;
  }

  .search-bar {
    width: 100%;
    height: 54px;
    display: flex;
    background-color: #fff;

    &.fixed {
      position: fixed;
      top: 0;
      z-index: 10;
    }

    .search-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      margin: 10px 0;

      .iconfont {
        font-size: 24px;
      }
    }

    .search-field {
      flex: 1;

      &.search-field__alone {
        .van-search {
        }
      }

      &.search-field__value {
        .van-search {
          padding-left: 0;
          padding-right: 0;
        }
      }
    }
  }
</style>