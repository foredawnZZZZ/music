import jsonp from 'assets/js/jsonp'
import {
  commonParams,
  options
} from 'api/config.js'
import axios from 'axios';

export const getRecommend = () => {
  let url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
  let data = Object.assign({}, commonParams)
  return jsonp(url, data, options)
}


export const getDescList = () => {
  let url = 'api/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })

  return axios.get(url,{
    params:data,
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    }
  }).then(res => {
    return Promise.resolve(res.data)
  })
}