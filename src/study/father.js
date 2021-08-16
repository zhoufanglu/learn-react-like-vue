import React from 'react'
import './study.scss'

import Child from './child'

export default class Father extends React.Component{
/*  constructor(props) {
    super(props)
  }*/
  render() {
    const fatherValue = '我是父组件的值'
    return (
      <div className={'father panel'}>
        <h2>我是father父组件</h2>
        <button onClick={()=>this.triggerChildFn()}>触发子组件方法</button>
        {/*<button onClick={this.test.bind(this)}>test</button>*/}
        <button onClick={this.test}>test</button>
        {/*子组件child*/}
        <Child
          fatherValue={fatherValue}
          getChildDataFn={this.getChildDataFn}
          onRef = {this.onRef.bind(this)}
          //onRef = {()=>this.onRef()}
        />
      </div>
    )
  }
  getChildDataFn(val) {
    console.log(22, this)
    console.log('父组件接收的值', val)
  }
  //把ref绑定在child上
/*  onRef=(ref)=> {
    console.log(31, this)
    this.child = ref
  }*/
  test() {
    console.log('test', this)
  }
  onRef(ref) {
    console.log(31, ref)
    this.child = ref
  }
  triggerChildFn(e) {
    console.log(35, this.child)
    this.child.childFn()
  }

}
