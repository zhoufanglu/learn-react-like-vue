import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals'

import {NavLink, HashRouter as Router} from "react-router-dom" //BrowserRouter 是路由的History模式
import {Suspense} from 'react'

import {renderRoutes} from 'react-router-config'
import routes from './router'

import'./request/http'

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
  <React.StrictMode>
    {/*<Clock/>*/}
    {/*<Menu/>*/}
    {/*<Father/>*/}
    {/*<DomEvent/>
    <App />*/}
      <Router>
        {
          routes.map(i=>{
            return (
              <NavLink key={i.name} exact activeStyle={{color:'red'}} to={i.path}>{i.name}&nbsp;&nbsp;&nbsp;&nbsp;|</NavLink>
            )
          })
        }
        {/*<NavLink exact activeStyle={{color:'red'}} to="/">home</NavLink> |
        <NavLink activeStyle={{color:'red'}} to="/feiyanDemo">feiyanDemo</NavLink> |
        <NavLink activeStyle={{color:'red'}} to="/fatherChild">fatherChild</NavLink> |*/}
        <Suspense fallback={<div>Lodaing</div>}>
          {renderRoutes(routes)}
        </Suspense>
      </Router>
    {/*<Route
        exact
        path="/"
        component={App}
      ></Route>
      <Route
        exact
        path="/feiyanDemo"
        component={feiyanDemo}
      ></Route>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
