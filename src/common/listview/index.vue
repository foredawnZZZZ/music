<template>
  <scroll class="listview" :data="data">
    <ul>
      <li v-for="(item,index) in data" :key="index" class="list-group">
        <h1 class="list-group-title">{{item.title}}</h1>
        <ul>
          <li v-for="item in item.items" :key="item.id" class="list-group-item">
            <img class="avatar" v-lazy="item.avatar" alt="">
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
  </scroll>
</template>

<script>
import Scroll from "common/scroll";
export default {
  components: {
    Scroll,
  },
  props: {
    data: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/variable'
.listview
  position relative
  width 100%
  height 100%
  overflow hidden
  background $color-background
  .list-group
    padding-bottom 30px
    .list-group-title
      height 30px
      line-height 30px
      padding-left 20px
      font-size $font-size-small
      color $color-text-l
      background $color-highlight-background
    .list-group-item
      display flex
      align-items center
      padding 20px 0 0 30px
      .avatar
        width 50px
        height 50px
        border-radius 50%
      .name
        margin-left 20px
        color $color-text-l
        font-size $font-size-medium
</style>

