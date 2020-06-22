<template>
  <div class="singers">
    <ListView :data="singerList"></ListView>
  </div>
</template>

<script>
import { getSingerList } from "api/singer";
import ListView from "common/listview";
import Singer from "assets/js/singer";
const HOT_TITLE = "热门";
const HOT_SINGER_LENGTH = 10;
export default {
  data() {
    return {
      singerList: [],
    };
  },
  components: {
    ListView,
  },
  mounted() {
    this._getSingerList();
  },
  methods: {
    _getSingerList() {
      getSingerList().then((res) => {
        this.singerList = this._normalizeSingers(res.data.list);
        console.log(this.singerList);
      });
    },
    _normalizeSingers(list) {
      let map = {
        hot: {
          title: HOT_TITLE,
          items: [],
        },
      };
      list.forEach((item, index) => {
        if (index < HOT_SINGER_LENGTH) {
          map.hot.items.push(new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name,
          }));
        }
        let key = item.Findex;
        if (!map[key]) {
          map[key] = {
            title: key,
            items: [],
          };
        }
        map[key].items.push(new Singer({
          id: item.Fsinger_mid,
          name: item.Fsinger_name,
        }));
      });
      let abs = [];
      let hots = [];
      for (let k in map) {
        let val = map[k];
        if (/^[a-zA-Z]+$/.test(val.title)) {
          abs.push(val);
        } else if (val.title === HOT_TITLE) {
          hots.push(val);
        }
      }
      abs.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      return hots.concat(abs);
    },
  },
};
</script>

<style lang="stylus" scoped>
  .singers
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
