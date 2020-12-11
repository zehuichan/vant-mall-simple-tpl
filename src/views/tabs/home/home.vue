<template>
  <div class="home">
    <!--搜索-->
    <search-bar/>
    <!--公告-->
    <notice-bar/>
    <!--banner-->
    <banner/>
    <!--专题楼层-->
    <floor/>
    <!--本周热卖-->
    <v-recommend title="本周热卖" layout="vertical" :data="hot"/>
    <!--最近浏览-->
    <v-recommend title="最近浏览" layout="vertical" :data="history"/>
  </div>
</template>

<script>
  // components
  import SearchBar from './components/SearchBar'
  import NoticeBar from './components/NoticeBar'
  import Banner from './components/Banner'
  import Floor from './components/Floor'

  export default {
    name: 'home',
    data() {
      return {
        hot: [],
        history: [],
      }
    },
    created() {
      this.initData()
    },
    methods: {
      initData() {
        this.hot = [
          { goods_name: 'goods name', img: '', origin_price: 79900, price: 79900, discount: '', newest: false },
          { goods_name: 'goods name', img: '', origin_price: 79900, price: 79900, discount: '', newest: false },
          { goods_name: 'goods name', img: '', origin_price: 54900, price: 54900, discount: '-50%', newest: false },
          { goods_name: 'goods name', img: '', origin_price: 79900, price: 79900, discount: '', newest: false },
          { goods_name: 'goods name', img: '', origin_price: 79900, price: 79900, discount: '', newest: false },
          { goods_name: 'goods name', img: '', origin_price: 79900, price: 79900, discount: '', newest: false },
        ]
        this.history = []
      },
    },
    components: {
      SearchBar,
      NoticeBar,
      Banner,
      Floor,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
</style>