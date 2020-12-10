<template>
  <div class="app-main" ref="$main">
    <keep-alive>
      <router-view v-if="keepAlive" :key="key"/>
    </keep-alive>
    <router-view v-if="!keepAlive" :key="key"/>
  </div>
</template>

<script>
  export default {
    name: 'AppMain',
    computed: {
      key() {
        return this.$route.path
      },
      keepAlive() {
        return this.$route.meta.keepAlive
      }
    },
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .app-main {
    position: relative;
    -webkit-overflow-scrolling: touch;
  }
</style>
