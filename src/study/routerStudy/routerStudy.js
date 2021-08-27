import React from 'react'
import {renderRoutes} from 'react-router-config'
import {NavLink,  HashRouter as Router} from "react-router-dom"
import {Suspense} from 'react'
//挂载 更新 卸载
class routerStudy extends React.Component{
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>routerStudy</h1>
        <NavLink exact activeStyle={{color:'red'}} to={'/routerStudy/child1'}>child1</NavLink>
        <NavLink exact activeStyle={{color:'red'}} to={'/routerStudy/child2'}>child2</NavLink>
        {renderRoutes(this.props.route.children, { someProp: "these extra props are optional" })}
      </div>
    )
  }
  /**********************事件***********************/
}

export default routerStudy
