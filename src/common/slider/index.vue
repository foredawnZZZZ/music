<template>
  <div class="slider" ref="sliderWrapper">
    <div class="sliderGroup" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <span v-for="(item,index) in dots" :class="{ active : currentPage === index }" :key="item" class="dot"></span>
    </div>
  </div>
</template>

<script>
import { addClass } from "assets/js/dom.js";
import BScroll from "better-scroll";
export default {
  name: "slider",
  props: {
    loop: {
      type: Boolean,
      default: true,
    },
    autoPlay: {
      type: Boolean,
      default: true,
    },
    interval: {
      type: Number,
      default: 4000,
    },
  },
  data() {
    return {
      isScrollDom: null,
      dots: [],
      currentPage: 0,
      timer: null,
    };
  },
  mounted() {
    setTimeout(() => {
      this._getWarpperWidth();
      this._initDots();
      this._initSilder();

      if (this.autoPlay) {
        this._play();
      }
    }, 20);
    const _this = this;
    window.addEventListener("resize",() => {
      if(!this.isScrollDom) {
        return;
      }
      this._getWarpperWidth(true);
    })
  },
  methods: {
    _getWarpperWidth(isResize) {
      let width = 0;
      let child = this.$refs.sliderGroup.children;
      let sliderWidth = this.$refs.sliderWrapper.clientWidth;
      for (let i = 0; i < child.length; i++) {
        let children = child[i];
        addClass(children, "slider-item");
        children.style.width = sliderWidth + "px";
        width += sliderWidth;
      }
      if(this.loop && !isResize) {
        width += 2 * sliderWidth
      }
      this.$refs.sliderGroup.style.width = width + "px";
    },
    _initSilder() {
      this.isScrollDom = new BScroll(this.$refs.sliderWrapper, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: true,
        snapLoop: this.loop,
        snapThreshold: 0.3,
        snapSpeed: 400
      });
      this.isScrollDom.on("scrollEnd", () => {
        let pageIndex = this.isScrollDom.getCurrentPage().pageX;
        if (this.loop) {
          pageIndex -= 1;
        }
        this.currentPage = pageIndex;
        if (this.autoPlay) {
          clearTimeout(this.timer);
          this._play();
        }
      });
    },
    _initDots() {
      this.dots = new Array(this.$refs.sliderGroup.children.length);
    },
    _play() {
      let pageIndex = this.currentPage + 1;
      if (this.loop) {
        pageIndex += 1;
      }
      this.timer = setTimeout(() => {
        this.isScrollDom.goToPage(pageIndex, 0, 400);
      }, this.interval);
    },
  },
  destroyed() {
    clearTimeout(this.timer);
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/variable.styl';

.slider 
  min-height: 1px
  .sliderGroup 
    position: relative
    overflow: hidden
    white-space: nowrap
    .slider-item 
      float: left
      box-sizing: border-box
      overflow: hidden
      text-align: center
      a 
        display: block
        width: 100%
        overflow: hidden
        text-decoration: none
      img 
        display: block
        width: 100%
  .dots 
    position: absolute
    top: 130px
    right: 0
    left: 0
    bottom: 0
    text-align: center
    font-size: 0
    .dot 
      display: inline-block
      margin: 0 4px
      width: 8px
      height: 8px
      border-radius: 50%
      background: $color-text-l
      &.active
        width: 20px
        border-radius: 5px
        background: $color-text-ll
</style>

