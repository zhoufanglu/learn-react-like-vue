import React from 'react'
import {Button, Input, message} from 'antd'
import './share.scss'
import api from '@/request/api'

class sharePage extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  render() {
    return (
      <div className='share-before'>
        <span>输入密码后进入:</span>
        <Input placeholder="enter password" style={{width: '200px'}}
          onChange={(e)=>{
            this.setState({value: e.target.value})
          }}
        />
        <Button onClick={this.go}>进入</Button>
      </div>
    )
  }
  /**********************事件***********************/
  go = async ()=> {
    console.log(28, this.state.value)
    const {data} = await api.share.judgePsw({password: this.state.value})
    if(data.code === -1){
      message.error('密码不对，无法进入！')
      localStorage.setItem('sharePassword', '')
    }else{
      localStorage.setItem('sharePassword', this.state.value)
      message.success('成功进入！')
      const location = {
        pathname: '/share',
        //state: { name: 'lfz' }, //类似vue中的params传参
        //search:"username=admin", //类似vue中的query传参
      }
      this.props.history.push(location)
    }
  }

  componentDidMount() {
    if(localStorage.getItem('sharePassword') === '666666'){
      this.props.history.push('/share')
    }
  }
}

export default sharePage
