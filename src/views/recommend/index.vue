<template>
  <div>
    <div v-if="recommendList.length" class="sliderContent">
      <slider>
        <div v-for="item in recommendList" :key="item.id">
          <a :href="item.linkUrl">
            <img :src="item.picUrl" alt="">
          </a>
        </div>
      </slider>
    </div>
    <div class="recommendList">
      <h1 class="recommendTitle">热门歌单推荐</h1>
      <ul>
        <li class="recommendItem">
          <div class="item_icon">
            <img width="60" height="60" src="../../components/m-header/logo@2x.png" alt="">
          </div>
          <div class="item_txt">
            <h2 class="name">狗贼</h2>
            <p class="desc">赵雷,你的民谣我的生活</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getRecommend } from 'api/recommend'
import { ERR_OK } from 'api/config'
import Slider from 'common/slider'
export default {
  components: {
    Slider
  },
  data() {
    return {
      recommendList: []
    }
  },
  created() {
    this._getRecommend();
  },
  methods:{
    _getRecommend() {
      getRecommend().then(res => {
        if(ERR_OK === res.code) {
          this.recommendList = res.data.slider;
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/variable.styl'
  .sliderContent
    position: relative
    width: 100%
    overflow: hidden
  .recommendList
    .recommendTitle
      height: 65px
      line-height:65px
      text-align center
      font-size: $font-size-medium
      color: $color-theme
    .recommendItem
      display:flex
      box-sizing: border-box
      align-items: center
      padding: 0 20px 20px 20px
      .item_icon
        flex: 0 0 60px
        width: 60px
        padding-right: 20px
      .item_txt
        display: flex
        flex-direction: column
        justify-content: center
        flex: 1
        line-height: 20px
        overflow: hidden
        font-size: $font-size-medium
        .name
          margin-bottom: 10px
          color: $color-text
        .desc
          color: $color-text-d
</style>
