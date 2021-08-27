import React from 'react'

//挂载 更新 卸载
class child1 extends React.Component{
  render() {
    return (
      <div>
        <h1>child1</h1>
      </div>
    )
  }
  componentDidMount() {
    console.log('child1')
  }

  /**********************事件***********************/
}

export default child1
