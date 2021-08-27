import React from 'react'
import '../study.scss'
//挂载 更新 卸载
class slotStudy extends React.Component{
  render() {
    console.log('render钩子函数')
    return (
      <div className='panel'>
        <h1>插槽学习</h1>
        <Child>
          <div>父组件1</div>
          <div>父组件2</div>
          <div>父组件344</div>
        </Child>
      </div>
    )
  }
}

//子组件
class Child extends React.Component{
  render() {
    console.log(23, this.props.children[0])
    return (
      <div className='panel'>
        我是个组件
        <div style={{border:'solid 1px green', margin: '20px'}}>
          <h3>我是插槽内容</h3>
          {this.props.children}
        </div>
      </div>
    )
  }
  componentDidMount() {
    /*let str = 'abbcccddddd'

    function calcMaxCount(str){
      let arr = str.split('')
      const countsObj = arr.reduce((prev,cur, index,arr)=>{
        prev.hasOwnProperty(cur)?prev[cur]++:prev[cur] = 1
        return prev
      },{})
      console.log(47, countsObj)
      return countsObj
    }
    calcMaxCount(str)*/
  }
}

export default slotStudy
