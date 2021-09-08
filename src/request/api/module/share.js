/**
 *分享模块
 */
import base from '@/request/api/base'
import axios from '@/request/http'

const share = {
  judgePsw(params) {
    return axios.post(`${base.dynamicUrl}/judgePsw`, params)
  },
  addLink(params) {
    return axios.post(`${base.dynamicUrl}/addLink`, params)
  },
  getLinks(params) {
    return axios.get(`${base.dynamicUrl}/getLinks`)
  },
}
export default share
