import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals'

import {NavLink, HashRouter as Router, Switch} from "react-router-dom" //BrowserRouter 是路由的History模式
import {Suspense} from 'react'

import {renderRoutes} from 'react-router-config'
import routes from './router'

import './request/http'

//组件学习引入
//import Father from './study/father'
//钟的组件
//import Clock from './study/clock'
//菜单
//import Menu from './study/menu/menu'

//事件学习
//import DomEvent from './study/domEvent'

//import feiyanDemo from './study/feiyanDemo/feiyanDemo'

ReactDOM.render(
  <div>
    {/**只能有一个Router根节点  Router -S**/}
    <Router>
      <>
        {/*路由导航*/}
        <div className='nav' style={{border: 'solid 1px red', padding: '20px'}}>
          {
            routes.map(i => {
              return (
                <span key={i.name}>
                  <NavLink exact activeStyle={{color: 'red'}} to={i.path}>{i.name}&nbsp;&nbsp;&nbsp;&nbsp;|</NavLink>
                </span>
              )
            })
          }
        </div>

        {/*渲染路由*/}
        <Suspense fallback={<div>loading</div>}>
          <Switch>
            {renderRoutes(routes)}
          </Switch>
        </Suspense>


        {/*<div className='nav' style={{border: 'solid 1px red', padding: '20px'}}>
            <NavLink activeStyle={{color:'red'}} to='/routerStudy'>我是LinkStudy</NavLink>
            <NavLink activeStyle={{color:'red'}} to={{pathname: '/home', search:"username=admin", state: {msg:'hello'}}}>我是LinkHome</NavLink>
          </div>
          <Suspense fallback={<div>loading</div>}>
            <Switch>
              {renderRoutes(routes)}
              原生路由render test
              <Route path='/routerStudy' component={routerStudy}>
              </Route>
              <Route path='/routerStudy'  component={routerStudy}></Route>
              <Route path='/home' exact component={home}/>
              <Redirect from='/' to='/home'/>
            </Switch>
          </Suspense>*/}
      </>
    </Router>
    {/**只能有一个Router根节点  Router -E**/}
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
