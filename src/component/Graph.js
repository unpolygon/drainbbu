import React, {useState} from 'react';
import {Line} from 'react-chartjs-2';

const Graph = (props) => {
  const [chartData,setChartData] = useState(props.chartData);

  Graph.defaultProps = {
    displayTitle:true,
    legendPosition:'right',
    location:'City'
  }
    console.log(props.chartData);
    return (
      <div className="Graph">
        <Line
          data={props.chartData}
          options={{
            title:{
              display:props.displayTitle,
              text:props.title,
              fontSize:(props.computer ? 25 : 15)
            },
            legend:{
              display:props.computer,
              position:props.legendPosition
            },
            scales: {
              yAxes: [{
                ticks: {
                    beginAtZero:false,
                    maxTicksLimit: (props.computer ? 10 : 5)                                             
                },
                scaleLabel: {
                    display: true,
                    labelString: (props.text.length > 15 && !props.computer ? 'The Amount' : props.text)

                }
              }],
              xAxes: [{
                ticks: {
                    beginAtZero:false,     
                    maxTicksLimit: (props.computer ? 20 : 10)                       
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Time'

                }
              }]         
            }, 
            layout: {
              padding: {
                  left: (props.computer ? 20 : 0),
                  right: (props.computer ? 30: 0),
              }
            }
          }}
        />
      </div>
    )
}

export default Graph;