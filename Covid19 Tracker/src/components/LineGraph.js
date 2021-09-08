import React from 'react'
import {Line} from 'react-chartjs-2'
const LineGraph = (props) =>{
return (
  <div
  style={{
    width:'1000px',
    height:'1000px',
    margin:'50px auto'
  }}
  
  >


  <Line data={{
labels:props.label.map(l=>l.substr(0,10)),
datasets:[
  {
    label: 'Corona Virus across the country',
    fill:true,
    lineTension:0.1,
    backgroundColor:'rgba(235, 59, 90,1.0)',
    borderColor:'rgba(252, 92, 101,1.0)',
    borderCapStyle: 'butt',
    borderDash:[],
    borderDashOffset:0.0,
    borderJoinStyle:'miter',
    pointBorderColor:'rgba(254, 211, 48,1.0)',
    pointBackgroundColor:'#fff',
    pointBorderWidth:1,
    pointHoverRadius:5,
    pointHoverBackgroundColor:'rgba(254, 211, 48,1.0)',
    pointHoverBorderColor:'rrgba(254, 211, 48,1.0)',
    pointHoverBorderWidth:2,
    pointRadius:1,
    pointHitRadius:10,
    data: props.yAxis
    }]}}/>
  </div>
)
}
export default LineGraph;