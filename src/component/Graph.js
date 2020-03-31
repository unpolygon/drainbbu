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
              text:props.text+' at '+props.location,
              fontSize:25
            },
            legend:{
              display:props.displayLegend,
              position:props.legendPosition
            }
          }}
        />
      </div>
    )
}

export default Graph;