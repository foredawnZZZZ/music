<template>
  <div class="m-header">
    <img class="defaultLogo" src="./logo@3x.png" alt="">
    <div class="text">Chicken Music</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
@import '~assets/stylus/variable.styl';
@import '~assets/stylus/mixin.styl';

.m-header
  height: 44px
  text-align: center
  .defaultLogo
    display: inline-block
    width: 30px
    height: 32px
    margin-right: 9px
    margin-top: 6px
  .text
    display:inline-block
    vertical-align: top
    line-height: 44px
    font-size: 18px
    color: $color-theme
</style>

