import React from 'react'
import data from '../data'
import './feiyanTable.scss'
export default class feiyanTable extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      sort: 'desc',//asc desc
      sortKey: ''
    }
  }
  render() {
    return (
      <div className={'feiyan-table'}>
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
          {this.state.list.map((i)=>{
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
    this.getList()
  }
  getList() {
    //初始化数据
    let list = data.data.FAutoforeignList
    const completedList = Array.from(list,i => {
      let obj = {
        ...i,
        ...{
          confirmFormat: this.numberFormat(i.confirm),
          deadFormat: this.numberFormat(i.dead),
          healFormat: this.numberFormat(i.heal),
        }
      }
      return obj
    })
    console.log(54, completedList)
    this.setState({'list': completedList})
    setTimeout(()=>{
      console.log(this.state)
    })
  }
  numberFormat(value) {
    let param = {};
    let k = 10000,
      sizes = ['', '万', '亿', '万亿'],
      i;
    if(value < k){
      param.value =value
      param.unit=''
    }else{
      i = Math.floor(Math.log(value) / Math.log(k));

      param.value = ((value / Math.pow(k, i))).toFixed(2);
      param.unit = sizes[i];
    }
    return param.value + param.unit
  }
  tableSort(sort, sortKey) {
    sort = sort === 'asc'? 'desc':'asc'
    this.setState({sort: sort, sortKey:sortKey})

    const sortArr = this.state.list.sort((a,b)=>{
      return sort === 'asc' ? a.confirm - b.confirm : b.confirm - a.confirm
    })
    this.setState({list: sortArr})
  }
}
