import React, {useState} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

const Graph = (props) => {
  const [chartData,setChartData] = useState(props.chartData);

  Graph.defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }
    console.log(props.chartData);
    // console.log(this.state.chartData);
    // console.log(this.state.hello);
    return (
      <div className="Graph">
        <Line
          data={props.chartData}
          options={{
            title:{
              display:props.displayTitle,
              text:'Largest Cities In '+props.location,
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