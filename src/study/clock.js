import React from 'react'
import './study.scss'


export default class Clock extends React.Component{
  constructor(props) {
    super(props)
    this.state ={
      time: ''
    }
  }
  render() {
    return (
      <div className={'clock panel'}>
        {<h2>clock:{this.state.time}</h2>}
      </div>
    )
  }
  componentDidMount() {
    setInterval(()=>{
      this.setState({time: new Date().toLocaleTimeString()})
    }, 1000)
    console.log('组件完成事件')
  }
}
