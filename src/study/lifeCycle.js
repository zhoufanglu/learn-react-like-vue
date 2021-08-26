import React from 'react'

//挂载 更新 卸载
class lifeCycle extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      value: '1'
    }
    console.log('constructor钩子函数')
  }
  render() {
    console.log('render钩子函数')
    return (
      <div>
        <h1>生命周期</h1>
        <button onClick={this.setStateClick}>修改state,触发componentDidUpdate钩子函数</button>
      </div>
    )
  }
  //组件渲染完毕
  componentDidMount() {
    console.log('DidMount钩子函数---组件渲染完毕')
  }
  //state更新时
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('DidUpdate钩子函数---state更新时')
  }
  //卸载
  componentWillUnmount() {
    console.log('WillUnmount钩子函数---卸载')
  }
  /**********************事件***********************/
  setStateClick = ()=> {
    this.setState({value: '22'})
  }
}

export default lifeCycle
