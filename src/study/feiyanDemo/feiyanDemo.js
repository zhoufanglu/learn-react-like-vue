import React from 'react'
import FeiyanTable from './components/feiyanTable'
import FeiyanChart from './components/feiyanChart'
import data from './data'

const outStyle = {
  display: 'flex',
}

//数据处理
export default class feiyanDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
    }
  }

  render() {
    return (
      <div style={outStyle}>
        <div>
          <h1>肺炎demo列表</h1>
          <FeiyanTable list={this.state.list}/>
        </div>
        <div>
          <h1>肺炎echarts</h1>
          <FeiyanChart list={this.state.list}/>
        </div>
      </div>
    )
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.getList()
  }

  getList() {
    //初始化数据
    this.timeout = setTimeout(() => {
      let list = data.data.FAutoforeignList
      const completedList = Array.from(list, i => {
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
      //console.log(54, completedList)
      this.setState((state) => {
        return {list: completedList}
      })
      this.setState({'list': completedList})

    }, 1000)

  }

  componentWillUnmount() {
    console.log('销毁事件')
    clearTimeout(this.timeout)
  }

  numberFormat(value) {
    let param = {};
    let k = 10000,
      sizes = ['', '万', '亿', '万亿'],
      i;
    if (value < k) {
      param.value = value
      param.unit = ''
    } else {
      i = Math.floor(Math.log(value) / Math.log(k));

      param.value = ((value / Math.pow(k, i))).toFixed(2);
      param.unit = sizes[i];
    }
    return param.value + param.unit
  }
}
