<template>
  <div class="recommendWrapper">
    <Scroll class="recommendScroll" ref="scroll" :data="descList">
      <div>
        <div v-if="recommendList.length" class="sliderContent">
          <slider>
            <div v-for="item in recommendList" :key="item.id">
              <a :href="item.linkUrl">
                <img @load="handleImgLoad" class="needsclick" :src="item.picUrl" alt />
              </a>
            </div>
          </slider>
        </div>
        <div class="recommendList">
          <h1 class="recommendTitle">热门歌单推荐</h1>
          <ul>
            <li
              class="recommendItem"
              v-for="item in descList"
              :key="item.dissid"
            >
              <div class="item_icon">
                <img width="60" height="60" v-lazy="item.imgurl" alt />
              </div>
              <div class="item_txt">
                <h2 class="name">{{ item.creator.name }}</h2>
                <p class="desc">{{ item.dissname }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loadingContent" v-show="!descList.length">
        <Loading class="load" />
      </div>
    </Scroll>
  </div>
</template>

<script>
import { getRecommend, getDescList } from "api/recommend";
import { ERR_OK } from "api/config";
import Slider from "common/slider";
import Scroll from "common/scroll";
import Loading from "common/loading";
export default {
  components: {
    Slider,
    Scroll,
    Loading
  },
  data() {
    return {
      recommendList: [],
      descList: []
    };
  },
  created() {
    this._getRecommend();
    setTimeout(() => {
      this._getDescList();
    },1000)
  },
  methods: {
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          this.recommendList = res.data.slider;
        }
      });
    },
    _getDescList() {
      getDescList().then(res => {
        if (res.code === ERR_OK) {
          this.descList = res.data.list;
        }
      });
    },
    handleImgLoad() {
      if (!this.checked) {
        this.checked = true;
        this.$refs.scroll.refresh();
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/variable.styl'
.recommendWrapper
  position fixed
  width 100%
  top 88px
  bottom 0
  .recommendScroll
    height 100%
    overflow hidden
    .sliderContent
      position relative
      width 100%
      overflow hidden
    .recommendList
      .recommendTitle
        height 65px
        line-height 65px
        text-align center
        font-size $font-size-medium
        color $color-theme
      .recommendItem
        display flex
        box-sizing border-box
        align-items center
        padding 0 20px 20px 20px
        .item_icon
          flex 0 0 60px
          width 60px
          padding-right 20px
        .item_txt
          display flex
          flex-direction column
          justify-content center
          flex 1
          line-height 20px
          overflow hidden
          font-size $font-size-medium
          .name
            margin-bottom 10px
            color $color-text
          .desc
            color $color-text-d
  .loadingContent
    position absolute
    width: 100%
    top: 50%
    transform: translateY(-50%)
</style>
