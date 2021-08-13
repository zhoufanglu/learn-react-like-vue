import './study.scss'
import React from 'react'

export function FnComponent(props) {
  console.log(props)
  return (
    <div className='panel'>
      <h1>我是函数式组件</h1>
    </div>
  )
}

export class ClassComponent extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className='panel'>
        我是类组件
        {this.props.age}
      </div>
    )
  }
}


