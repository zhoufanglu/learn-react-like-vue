import React from 'react'
import '@/study/study.scss'
import {createStore} from 'redux'

//增删改查list组件
class ListChange extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'All',
      addValue: '',
      list: [
        {
          name: 'a',
          isDel: false
        }
      ],
      allList: []
    }
  }
  render() {
    return (
      <div className='panel-inner data-mark'>
        <h3>数据标记</h3>
        <div className='add-panel'>
          <input type="text"
            value={this.value}
                 onChange={(e)=>{
                   this.setState({addValue: e.target.value})
                 }}
          />
          <button onClick={this.add}>add</button>
        </div>
        <div className='list-panel'>
          <ul>
            {this.state.list.map((i,index)=>{
              return (
                <li style={{textDecoration: i.isDel?'line-through':''}} onClick={()=>this.itemClick(index)} key={index}>{i.name}</li>
              )
            })}
          </ul>
        </div>
        <div className={'btn-row'}>
          <button className={this.state.active==='All'?'active':''} onClick={()=>this.btnClick('All')}>All</button>
          <button className={this.state.active==='Active'?'active':''} onClick={()=>this.btnClick('Active')}>Active</button>
          <button className={this.state.active==='Completed'?'active':''} onClick={()=>this.btnClick('Completed')}>Completed</button>
        </div>
      </div>
    )
  }

  add = () => {
    let { list } = this.state
    if (this.state.addValue) {
      const item  = {
        name: this.state.addValue,
        isDel: false
      }
      this.setState({list: [...list, item], allList: [...list,item]})
    }
  }

  itemClick = (index) =>{
    let { list } = this.state
    list[index].isDel = !list[index].isDel
    this.setState({list:list})
  }

  btnClick(cate) {
    let {allList} = this.state, filterList = []
    //根据不同类别 过滤不同数据
    if(cate === 'Active'){
      filterList = allList.filter(i=>!i.isDel)
    }else if(cate === 'Completed') {
      filterList = allList.filter(i=>i.isDel)
    }else {
      filterList = allList
    }
    this.setState({list: filterList, active: cate})
  }

  componentDidMount() {
    this.setState({allList: this.state.list})
  }
}

/**********************创建仓库***********************/
const reducer = (state = {num: 0}, action) => {
  if (action.type === 'add') {
    state.num++
  } else if (action.type === 'decrement') {
    state.num--
  }
  return state
}
const store = createStore(reducer)
//订阅 监听数据
store.subscribe(()=>{
  console.log(store.getState())
})

export default class redux extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      state: store.getState()
    }
  }
  render() {
    return (
      <div className='redux panel'>
        <div >
          <h2>redux组件</h2>
          <div className='panel-inner'>
            <h4>计数器</h4>
            <div>数量: {this.state.state.num}</div>
            {/*<button onClick={()=>this.calc('add')}>+1</button>
            <button onClick={()=>this.calc('sub')}>-1</button>*/}
            <button onClick={this.add}>+1</button>
            <button onClick={this.decrement}>-1</button>
          </div>
        </div>
        <ListChange/>
      </div>
    )
  }

  /**
   * @param cate 加法减法
   */
  /*calc=(cate)=>{
    let {num} = this.state
    cate === 'add' ? num++ : num--
    this.setState({num: num})
  }*/
  //通过仓库的方法dispatch进行修改数据
  add() {
    store.dispatch({type: 'add'})
  }
  decrement(){
    store.dispatch({type: 'decrement'})
  }
  componentDidMount() {
  }
}

