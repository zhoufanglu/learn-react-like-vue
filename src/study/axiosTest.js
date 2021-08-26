import React from 'react'
import api from '@/request/api'

//挂载 更新 卸载
class axiosTest extends React.Component{
/*  constructor(props) {
    super(props)
  }*/
  render() {
    console.log('render钩子函数')
    return (
      <div>
        <h1>axios请求测试</h1>
        <button onClick={this.setStateClick}>修改state,触发componentDidUpdate钩子函数</button>
      </div>
    )
  }
  //组件渲染完毕
  componentDidMount() {
    //console.log('DidMount钩子函数---组件渲染完毕')
    this.getData()
  }
  //state更新时
  componentDidUpdate(prevProps, prevState, snapshot) {
    //console.log('DidUpdate钩子函数---state更新时')
  }
  //卸载
  componentWillUnmount() {
    //console.log('WillUnmount钩子函数---卸载')
  }
  /**********************事件***********************/
  setStateClick = ()=> {

  }
  /**********************请求***********************/
  async getData() {
    const res = await api.test.test()
    console.log(38, res)
  }
}

export default axiosTest
