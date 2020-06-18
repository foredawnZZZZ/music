<template>
  <div class="tab">
    <router-link to='/recommend' class="linkTo" tag='div'>
      <span class="tab-item">推荐</span>
    </router-link>
    <router-link to='/singer' class="linkTo" tag='div'>
      <span class="tab-item">歌手</span>
    </router-link>
    <router-link to='/rank' class="linkTo" tag='div'>
      <span class="tab-item">排行</span>
    </router-link>
    <router-link to='/search' class="linkTo" tag='div'>
      <span class="tab-item">搜索</span>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
  @import "~assets/stylus/variable.styl"

  .tab
    height: 44px
    line-height: 44px
    display: flex;
    font-size: $font-size-medium
    .linkTo
      flex: 1
      height: 100%
      text-align: center
      .tab-item
        padding-bottom: 5px
        color: $color-text-l
      &.router-link-active
        .tab-item
          color: $color-theme
          border-bottom: 2px solid $color-theme
</style>
