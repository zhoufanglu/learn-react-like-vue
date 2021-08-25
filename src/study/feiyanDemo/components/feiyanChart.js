import React from 'react'
import * as echarts from 'echarts'

const chartStyle = {
  height: '500px',
  width: '1000px'
}

export default class feiyanChart extends React.Component{
/*  constructor(props) {
    super(props)
  }*/
  render() {
    return (
      <div>
        <div id='chart' style={chartStyle}>

        </div>
      </div>
    )
  }
  componentDidMount() {
  }
  componentDidUpdate(nextProps, nextState, snapshot){
    if(JSON.stringify(this.props.list) !== JSON.stringify(nextProps.list)){
      console.log(26, this.props.list)
      //渲染图表
      const myChart = echarts.init(document.querySelector('#chart'))
      const xList = this.props.list.map(i=>i.name)
      const yList = this.props.list.map(i=>i.confirm)
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        xAxis: {
          type: 'category',
          data: xList
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: yList,
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }]
      }
      myChart.setOption(option)
    }
  }
}
