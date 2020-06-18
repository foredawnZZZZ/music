import jsonp from 'assets/js/jsonp'
import {
  commonParams,
  options
} from 'api/config.js'

export const getRecommend = () => {
  let url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
  let data = Object.assign({}, commonParams)
  return jsonp(url, data, options)
}
