import React from 'react'
import {Button, Input, Select, message, Modal, Card, Table, Tag} from 'antd'
import './share.scss'
import api from '@/request/api'

const { Option } = Select;


class sharePage extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      country: 'China',
      isModalVisible: false,
      shareBtnLoading: false
    }
  }
  render() {
    return (
      <div className='share-before'>
        <div className='share-content'>
          <span>country：</span>
          <Select defaultValue="China" style={{ minWidth: 100 }} onChange={this.handleChange}>
            <Option value="China">China</Option>
            <Option value="Japan">Japan</Option>
            <Option value="Western">Western</Option>
          </Select>
          <span style={{margin: '0 10px'}}>link:</span>
          <Input style={{ minWidth: 500 }}
                 onChange={(e) => {
                   this.setState({value: e.target.value})
                 }}
                 defaultValue={''}
                 placeholder="only support thunder" />
          <Button type='primary' loading={this.state.shareBtnLoading} onClick={this.addLink}>share</Button>
        </div>

        <Button style={{marginTop: '30px'}} bordered='false' onClick={this.seeLinks} type='primary'>see share content</Button>
        <Card title="注意事项：" style={{ width: 400, marginTop: 100 }}>
          <p>此项目为<strong>技术交流群</strong>特意制作。</p>
          <p>只是群内项目，禁止传播！</p>
          <p>垃圾服务器，请勿恶意请求！</p>
          <p>一旦发现，Mom explodes in place！！！</p>
        </Card>

        <Modal title="share links"
               width={1000}
               visible={this.state.isModalVisible}
               onOk={this.handleCancel}
               onCancel={this.handleCancel}
        >
          <ModalTable
            onRef= {this.onRef.bind(this)}
          />
        </Modal>

      </div>
    )
  }
  /**********************事件***********************/
  setStateClick = ()=> {
    this.setState({value: '22'})
  }
  addLink= async ()=> {
    ///magnet\:\?xt=urn\:btih:.+/
    ///thunder:\/\/[^\=]+?==/
    const reg = /magnet\:\?xt=urn\:btih:.+/
    //const path = 'magnet:?xt=urn:btih:190AC8F7788C7511E6C99F56D7453101B605460D&dn=stars303_ch'
    //magnet:?xt=urn:btih:f208385bdc4366270cbdb2a91fabd4167a19aa54&dn=[G-Area] 20131224 Perfect-G 452 Anju　(北川杏樹)  
    const {value, country} = this.state
    this.setState({shareBtnLoading: true})
    if(reg.test(value)){
      const {data} = await api.share.addLink({country, value})
      if(data.code === -1){
        message.error('分享内容已经存在，请换地址')
      }else{
        message.success('谢谢你的分享，分享成功！！')
      }
      this.setState({shareBtnLoading: false})
      //this.setState({isModalVisible: true})
    }else{
      message.error('请输入正确的thunder格式')
    }
  }
  handleChange =(e)=> {
    this.setState({country: e})
  }
  handleCancel =(e)=>{
    this.setState({isModalVisible: false})
  }
  seeLinks=()=>{
    this.setState({isModalVisible: true})
    setTimeout(()=>{
      this.childClass.getLinks()
    }, 500)
    //this.childClass.getLinks()
  }
  onRef(ref) {
    this.childClass = ref
  }
  async componentDidMount() {
    if(localStorage.getItem('sharePassword') !== '666666'){
      this.props.history.push('/shareBefore')
    }else{

    }
  }
}

class ModalTable extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      columns: [
        {
          title: '序号',
          render:(text,record,index)=>`${index+1}`
        },
        {
          title: '国家',
          dataIndex: 'country',
          key: 'country',
        },
        {
          title: '地址',
          dataIndex: 'value',
          key: 'value',
        },
        {
          title: '时间',
          dataIndex: 'date',
          key: 'date',
        },
      ]
    }
  }
  render() {
    return (
      <div>
        <Table
          rowKey = {(record) => record.id}
          dataSource={this.state.list}
          columns={this.state.columns} />
      </div>
    )
  }
  async getLinks() {
    const {data} = await api.share.getLinks('')
    const list = data.data
    this.setState({list: list})
    //console.log(79, list)
  }
  componentDidMount() {
    //把子组件传到父组件
    this.props.onRef(this)
  }
}

export default sharePage
