<template>
  <svg :class="[classPrefix, 'iconfont']" aria-hidden="true" v-bind="$attrs">
    <use :xlink:href="`#${name}`"/>
  </svg>
</template>

<script>
  export default {
    name: 'svg-icon',
    props: {
      name: String,
      classPrefix: String,
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .iconfont {
    width: 1em;
    height: 1em;
    min-width: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>