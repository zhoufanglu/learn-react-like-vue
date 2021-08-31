import React from 'react'

//挂载 更新 卸载
class child2 extends React.Component{
  render() {
    return (
      <div>
        <h1>child2</h1>
        <span>接受到的值：{this.props.location.search}</span>
        <button onClick={this.back}>返回</button>
      </div>
    )
  }
  /**********************事件***********************/
  back = ()=>{
    this.props.history.go(-1)
  }
  componentDidMount() {
    console.log(18, this.props.location.search)
  }
}

export default child2
