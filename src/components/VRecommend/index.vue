<template>
  <div class="v-recommend" :class="layout">
    <div class="title" v-if="title || $slots.title">
      <slot name="title">{{title}}</slot>
    </div>
    <div class="v-recommend-list">
      <div class="item" v-for="(item, index) in data" :key="index">
        <div class="image">
          <van-image width="100%" height="100%" :src="item.img"/>
          <div class="tag newest" v-if="item.newest">最新</div>
          <div class="tag discount" v-if="item.discount">{{item.discount}}</div>
        </div>
        <div class="name">{{item.goods_name + index}}</div>
        <div class="price">{{$filters.moneyFilter(item.price)}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VRecommend',
    props: {
      title: String,
      // horizontal | vertical
      layout: {
        type: String,
        default: 'horizontal'
      },
      data: {
        type: Array,
        required: true,
        default: () => []
      }
    }
  }
</script>

<style lang="less" scoped>
  .v-recommend {

    .title {
      font-size: @font16;
      font-weight: @fw-600;
      margin-bottom: @gutter-16;
    }
  }

  .v-recommend-list {
    display: flex;

    .item + .item {
      margin-left: 10px;
    }

    .image {
      position: relative;
      width: 166px;
      height: 166px;

      .tag {
        position: absolute;
      }

      .discount {
        top: 8px;
        right: 0;
        background-color: #ff7777;
        color: #fff;
        border-radius: 2px;
        font-size: @font10;
        font-weight: @fw-500;
        padding: 2px 12px;
      }
    }

    .name {
      font-size: @font15;
    }

    .price {
      font-weight: @fw-500;
    }

  }

  .v-recommend.horizontal {
    margin: @gutter-16 @gutter-16 0;
  }

  .v-recommend.vertical {
    margin: @gutter-16 0 0 @gutter-16;

    .v-recommend-list {
      overflow-y: auto;
    }
  }
</style>