<template>
  <div class="v-recommend">
    <div class="title">
      <slot name="title">{{title}}</slot>
    </div>
    <div class="v-recommend-list">

    </div>
  </div>
</template>

<script>
  export default {
    name: 'VRecommend',
    props: {
      title: String
    }
  }
</script>

<style scoped>

</style>