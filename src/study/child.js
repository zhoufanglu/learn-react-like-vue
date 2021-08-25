import React from 'react'
import './study.scss'

export default class Child extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      childList: [],
      childTimeOut: '',
      childData: '我是子组件的数据'
    }
  }
  render() {
    console.log(this.props.fatherValue)//从父组件接收的值，输出 ‘我是父组件的值’
    return (
      <div className={'child panel'}>
        <h2>我是child子组件</h2>
        <h4>{this.state.childData}</h4>
        {this.state.childList}
        <button onClick={(ref)=>this.sendDataByChild()}>点击传递值给父元素</button>
      </div>
    )
  }
  sendDataByChild() {
    this.props.getChildDataFn('我是子组件的值')
  }
  childFn() {
    console.log('我是子组件的方法')
  }
  componentDidMount() {
    this.props.onRef(this)
    this.props.getChildData(this.state.childData, this)
  }

  /**
   *
   * @param prevProps
   * @param prevState
   * @param snapshot
   * componentDidUpdate
   更新完成函数。

   📜 语法：componentDidUpdate(nextProps, nextState, snapshot)

   ⏱ 触发时机：组件每次重新渲染后触发，相当于首次渲染（初始化）之后触发 componentDidMount ，

   🎉 适用场景：操作 DOM；发送网络请求。
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    //console.log(24, this.props.fatherList)
    /*if(this.props.timeOutVal !== prevProps.timeOutVal){
      this.setState({childTimeOut: this.props.timeOutVal})
    }*/
    //console.log(48, prevProps, this.props)
    if(JSON.stringify(this.props.fatherList) !== JSON.stringify(prevProps.fatherList)){
      this.setState({childList: this.props.fatherList})
    }
  }
}
