/**
 * api接口的统一出口
 */
import test from '@/request/api/module/test'
// 其他模块的接口……

// 导出接口
const api = {
  test,
  // ……
}
export default api
