<template>
  <div ref="scrollDom">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: null
    }
  },
  mounted() {
    setTimeout(() => {
      this._initScroll();
    },20)
  },
  data() {
    return {
      scroll: null
    };
  },
  methods: {
    _initScroll() {
      if (!this.$refs.scrollDom) {
        return;
      }
      this.scroll = new BScroll(this.$refs.scrollDom, {
        probeType: this.probeType,
        click: this.click
      });
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    }
  },
  watch: {
    data:{
      handler(a) {
        setTimeout(() => {
          this.refresh()
        },20)
      }
    }
  }
};
</script>

<style lang="stylus" scoped></style>