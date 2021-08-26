/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
//import { Message } from 'element-ui'
import axios from 'axios'

const headerConfig = {
	json: {
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
			'X-Requested-With': 'XMLHttpRequest',
		},
	},
	form: {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	},
	file: {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
		},
	},
	excel: {
		responseType: 'arraybuffer',
	},
}

const instance = axios.create({
	timeout: 10000,
})


// 设置默认请求头
//instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
instance.defaults.headers.post['Content-Type'] =
	headerConfig['json'].headers['Content-Type']

/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
instance.interceptors.request.use(
	(config) => {
		// 登录流程控制中，根据本地是否存在token判断用户的登录情况
		// 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
		// 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
		// 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
		/**********************token配置***********************/
		const token = 'mytoken'
		token && (config.headers.Authorization = token)
		return config;
	},
	(error) => Promise.error(error)
)

// 响应拦截器
instance.interceptors.response.use(
	// 请求成功
	(res) => {
		if (res.status === 200) {
			//store.dispatch('changeNetwork', true)
			return Promise.resolve(res)
		} else {
			return Promise.reject(res)
		}
	},
	// 请求失败
	(error) => {
		const { response } = error
		// console.log(94, response)
		if (response) {
			// 请求已发出，但是不在2xx的范围
			errorHandle(response.status, response.data.message)
			return Promise.reject(response)
		} else {
			// 处理断网的情况
			// eg:请求超时或断网时，更新state的network状态
			// network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
			// 关于断网组件中的刷新重新获取数据，会在断网组件中说明
			//store.dispatch('changeNetwork', false);
			//router.push({path:'refresh'})
			console.log('其他错误', response)
			//messageOnce.error('网络异常，请稍后重试')
			//Message.error('网络异常，请稍后重试')
		}
	}
)

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
	// 状态码判断
	switch (status) {
		// 401: 未登录状态，跳转登录页
		case 401: //未登录
			// Message.error('请先登录！')
			//toLogin()
			break
		// 403 token过期
		// 清除token并跳转登录页
		case 403:
			//Message.error('登录过期，请重新登录')
			/*localStorage.removeItem('token');
      store.commit('changeLogin', false);*/
			setTimeout(() => {
				//toLogin()
			}, 1000)
			break
		// 404请求不存在
		case 404:
			//Message.error('请求的资源不存在')
			break
		case 500:
			//store.commit('changeNetwork', false)
			// Message.error('网络异常!')
			break
		//router.push({path:'refresh'})
		default:
			console.log('其它错误', other)
	}
}

export default instance
