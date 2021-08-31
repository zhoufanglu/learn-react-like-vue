import React from 'react'
import {renderRoutes} from 'react-router-config'
import {NavLink} from "react-router-dom"
import '@/study/study.scss'
//挂载 更新 卸载
class routerStudy extends React.Component{
  render() {
    console.log(this.props)
    return (
      <div className='panel-inner'>
        <h4>routerStudy 页面</h4>
        <NavLink exact activeStyle={{color:'red'}} to={'/routerStudy/child1'}>child1 |</NavLink>
        <NavLink exact activeStyle={{color:'red'}} to={'/routerStudy/child2'}>child2</NavLink>
        <div className='child-panel'>
          {/*<Switch>
            <Route path='/routerStudy/child1' component={child1}/>
            <Route path='/routerStudy/child2' component={child2}/>
            <Redirect from='/routerStudy' to='/routerStudy/child1'/>重定向组件Redirect
          </Switch>*/}
          {renderRoutes(this.props.route.children, { someProp: "these extra props are optional" })}
        </div>
      </div>
    )
  }
}

export default routerStudy
