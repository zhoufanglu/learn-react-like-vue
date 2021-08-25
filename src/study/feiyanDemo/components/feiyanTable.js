import React from 'react'
import './feiyanTable.scss'
export default class feiyanTable extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      tableList: [],
      sort: 'desc'
    }
  }
  render() {
    //this.setState({'list': this.props.list})
    return (
      <div className={'feiyan-table'} >
        <ul className={'thead'}>
          <li>城市</li>
          <li>
            现有确诊
            <span style={{display: this.state.sort === 'asc'?'inline-block':'none'}}
                  onClick={()=>this.tableSort('asc', 'confirm')}
            >↑</span>
            <span style={{display: this.state.sort === 'desc'?'inline-block':'none'}}
                  onClick={()=>this.tableSort('desc', 'confirm')}
            >↓</span>
          </li>
          <li>死亡人数</li>
          <li>治愈人数</li>
        </ul>
        <div className={'tbody'}>
          {this.state.tableList.map((i)=>{
            return(
              <ul key={i.name}>
                <li>{i.name}</li>
                <li>{i.confirmFormat}</li>
                <li>{i.deadFormat}</li>
                <li>{i.healFormat}</li>
              </ul>
            )
          })}
        </div>
      </div>
    )
  }
  componentDidMount() {
  }
  //组件更新完毕，props变化 会跟着触发
  componentDidUpdate(prevProps, prevState,) {
    if(JSON.stringify(this.props.list) !== JSON.stringify(prevProps.list)){
      this.setState({tableList: this.props.list})
    }
  }
  tableSort(sort, sortKey) {
    sort = sort === 'asc'? 'desc':'asc'
    this.setState({sort: sort, sortKey:sortKey})

    const sortArr = this.state.tableList.sort((a,b)=>{
      return sort === 'asc' ? a.confirm - b.confirm : b.confirm - a.confirm
    })
    this.setState({tableList: sortArr})
  }
}
