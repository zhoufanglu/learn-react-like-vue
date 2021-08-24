import React from 'react'
import './study.scss'

export default class Child extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {name: 'lfz', age: 26, gender: 'man'},
        {name: 'sxy', age: 25, gender: 'male'},
      ]
    }
    this.data = {test: 'testData'}
  }
  render() {
    console.log(15, this.data.test)
    return (
      <div className={'panel'}>
        <h2>循环渲染</h2>
        {this.state.list.map(i=>{
          return (
            <div key={i.name}>
              <h3>{i.name}</h3>
              <span>{i.age}</span>-
              <span>{i.gender}</span>
            </div>
          )
        })}
        <h2>阻止冒泡，捕获</h2>
        <div onClickCapture={this.fatherClick} className={'item-border'}>父button
          <div onClick={this.childClick} className={'item-border'}>子button</div>
        </div>
        <h2>事件传值</h2>
        <div className={'item-border'}
             onClick={(e)=>this.clickHasVal('test', e)}>
          点我拿值
        </div>
      </div>
    )
  }
  fatherClick = (e)=> {
    console.log('父亲点击')
  }
  childClick = (e)=> {
    console.log('儿子点击')
    //e.stopPropagation()
  }
  clickHasVal(val,e){
    console.log(val, e.target, this)
  }
  componentDidMount() {

  }
}
