import React from 'react'
import './study.scss'

import Child from './child'
import {Button, DatePicker} from 'antd'

export default class Father extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      fatherList: [],
      timeOutVal: ''
    }
  }
  render() {
    const fatherValue = '我是父组件的值'
    return (
      <div className={'father panel'}>
        <DatePicker/>
        <Button type='primary'>ant btn</Button>
        <h2>我是father父组件</h2>
        <button onClick={()=>this.triggerChildFn()}>触发子组件方法</button>
        {/*<button onClick={this.test.bind(this)}>test</button>*/}
        <button onClick={this.test}>test</button>
        {/*子组件child*/}
        <Child
          fatherList={this.state.fatherList}
          timeOutVal={this.state.timeOutVal}
          fatherValue={fatherValue}
          getChildDataFn={this.getChildDataFn}
          onRef = {this.onRef.bind(this)}
          getChildData = {this.getChildData}
          //onRef = {()=>this.onRef()}
        />
      </div>
    )
  }
  getChildData(data, childCom) {
    console.log(36, data,childCom)
    childCom.setState({childData: 'dog things'})
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
  async componentDidMount() {
    const res = await this.getAsyncData()
    this.setState({fatherList: res})

    this.time = setTimeout(()=>{
      this.setState({timeOutVal: '我是setTimeout的值'})
    }, 1000)
  }
  getAsyncData() {
    return new Promise(resolve => {
      resolve ([1,2,3])
    })
  }
  //卸载函数 在组件卸载和销毁之前触发
  componentWillUnmount() {
    console.log('卸载的father')
    console.log('定时器', this.time)
    clearTimeout(this.time)
  }

}
