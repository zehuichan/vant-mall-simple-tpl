<template>
  <div class="home">
    <search-bar/>
    <notice-bar/>
    <banner/>
    <floor/>
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