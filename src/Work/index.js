import React, { PropTypes } from 'react'
import echarts from 'echarts'

class Work extends React.Component {
  componentDidMount(){
    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例',
        textStyle:{
          color:'#058'
        }
      },
      tooltip: {},
      xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      },
      yAxis: {},
      series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
      }]
  });
  }
  render () {
    return(
      <div id='main' style={{width:'100%',height:'auto',maxWidth:'600px',margin:'0-auto'}}>
        Work页面
      </div>
    )
  }
}

export default Work;
