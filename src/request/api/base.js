/**
 * 接口域名的管理
 */

//接口统一使用dynamicUrl变量
let dynamicUrl = 'http://127.0.0.1:7002'// 接口ip

console.log(8, process.env.NODE_ENV)
if(process.env.NODE_ENV !== 'development'){
  dynamicUrl = 'http://110.40.136.102:7001'
}

//console.log('api-path', process.env.VUE_APP_SERVER_URL)

const base = {
	dynamicUrl: dynamicUrl,//接口请求地址
}

export default base
