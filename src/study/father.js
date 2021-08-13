import React from 'react'
import './study.scss'

import Child from './child'

export default class Father extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    const fatherValue = '我是父组件的值'
    return (
      <div className={'father panel'}>
        <h2>我是father父组件</h2>
        <button onClick={()=>this.triggerChildFn()}></button>
        {/*子组件child*/}
        <Child fatherValue={fatherValue} getChildDataFn={this.getChildDataFn}/>
      </div>
    )
  }
  getChildDataFn(val) {
    console.log('父组件接收的值', val)
  }
  triggerChildFn() {

  }

}
