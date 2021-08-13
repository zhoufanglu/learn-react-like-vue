import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//组件学习引入
import Father from './study/father'
//钟的组件
//import Clock from './study/clock'
//菜单
//import Menu from './study/menu/menu'

ReactDOM.render(
  <React.StrictMode>
    {/* 注释格式 */}
    {/*<Clock/>*/}
    {/*<Menu/>*/}
    <Father/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
