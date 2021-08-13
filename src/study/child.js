import React from 'react'
import './study.scss'

export default class Child extends React.Component{
  render() {
    console.log(this.props.fatherValue)//从父组件接收的值，输出 ‘我是父组件的值’
    return (
      <div className={'child panel'}>
        <h2>我是child子组件</h2>
        <button onClick={()=>this.sendDataByChild()}>点击传递值给父元素</button>
      </div>
    )
  }
  sendDataByChild() {
    this.props.getChildDataFn('我是子组件的值')
  }
}
