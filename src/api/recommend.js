import jsonp from 'assets/js/jsonp'
import {
  commonParams,
  options
} from 'api/config.js'
// import axios from 'axios';

export const getRecommend = () => {
  let url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
  let data = Object.assign({}, commonParams)
  return jsonp(url, data, options)
}


// export const getDescList = () => {
//   let url = '/api/getDiscList'
// }