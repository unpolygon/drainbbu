import React,{useState} from 'react';
import DateTime from './DateTime';

const ButtonGraph = () => {
    const [chartData,setChartDate] = useState({
        chartData:{
          labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford','hello'],
          datasets:[
            {
              label:'Population',
              data:[
                617594,
                181045,
                153060,
                106519,
                105162,
                95072,
                123456,
              ],
              backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)'
              ]
            }
          ]
        }
      })

    const getChartData = () => {
        // Ajax calls here
        setChartDate({
          chartData:{
            labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford','hello'],
            datasets:[
              {
                label:'Population',
                data:[
                  617594,
                  181045,
                  153060,
                  106519,
                  105162,
                  95072,
                  123456,
                ],
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ]
              }
            ]
          }
        });
      }

    return(
        <div className='ButtonGraph'>
                <span>FROM: </span><DateTime />
                <span>TO: </span><DateTime />
                <button onClick={getChartData}>Graph</button>
        </div>
    );
}

export default ButtonGraph;