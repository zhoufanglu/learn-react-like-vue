import React from 'react'

//挂载 更新 卸载
class child1 extends React.Component{
  render() {
    return (
      <div>
        <h1>child1</h1>
        <button onClick={this.goChild2}>go Child2</button>
      </div>
    )
  }
  goChild2 =()=> {
    const location = {
      pathname: '/routerStudy/child2',
      state: { name: 'lfz' }, //类似vue中的params传参
      search:"username=admin", //类似vue中的query传参
    }
    this.props.history.push(location)
  }
  componentDidMount() {
    console.log('child1')
  }

  /**********************事件***********************/
}

export default child1
