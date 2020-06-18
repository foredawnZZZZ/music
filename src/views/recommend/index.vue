<template>
  <div v-if="recommendList.length" class="sliderContent">
    <slider>
      <div v-for="item in recommendList" :key="item.id">
        <a :href="item.linkUrl">
          <img :src="item.picUrl" alt="">
        </a>
      </div>
    </slider>
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
  .sliderContent
    position: relative
    width: 100%
    overflow: hidden
</style>
