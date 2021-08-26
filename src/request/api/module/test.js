/**
 *测试
 */
import base from '@/request/api/base'
import axios from '@/request/http'

const test = {
	test(params) {
		return axios.get(`${base.dynamicUrl}/testA`)
	},

}
export default test
