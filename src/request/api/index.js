/**
 * api接口的统一出口
 */
import test from '@/request/api/module/test'
import share from '@/request/api/module/share'
// 其他模块的接口……

// 导出接口
const api = {
  test,
  share
  // ……
}
export default api
