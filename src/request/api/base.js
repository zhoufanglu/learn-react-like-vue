/**
 * 接口域名的管理
 */

//接口统一使用dynamicUrl变量
const dynamicUrl = 'http://127.0.0.1:7002'// 接口ip

//console.log('api-path', process.env.VUE_APP_SERVER_URL)

const base = {
	dynamicUrl: dynamicUrl,//接口请求地址
}

export default base
