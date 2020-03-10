import React, { useState,useEffect} from 'react';
import '../style/SendGraph.scss';
import Graph from './Graph';
import DateTime from './DateTime';
import SplitButton from './SplitButton';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import axios from 'axios';

const SendGraph = () => {
  var tzoffset = (new Date()).getTimezoneOffset() * 60000;
  const [options, setOptions] = useState(['WlGraph','RlGraph','QGraph']);
  const [chartData,setChartData] = useState({});
  const [labels, setLabels] = useState([]); 
  const [backgroundColor,setBackgroundColor] = useState([
    'rgba(54, 162, 235, 0.6)',
    'rgba(255, 99, 132, 0.6)',
    'rgba(255, 206, 86, 0.6)',
    'rgba(75, 192, 192, 0.6)',
    'rgba(153, 102, 255, 0.6)',
    'rgba(255, 159, 64, 0.6)',
    'rgba(255, 99, 132, 0.6)'
  ]);
  const [To,setTo] = useState(new Date(new Date(2017,8,3) - tzoffset).toISOString().slice(0, 19).replace('T', ' '));
  const [From,setFrom] = useState(new Date(new Date(2017,8,3) - tzoffset).toISOString().slice(0, 19).replace('T', ' '));

  useEffect(() => {
    initChartData();
    console.log({chartData});
  },[]);

  const initChartData = () => {
    // Ajax calls here
    setChartData({
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
              'rgba(255, 206, 86, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
    });
  }
  const onChangeFrom = (From) => {
    setFrom(From);
  }

  const onChangeTo = (To) => {
    setTo(To);
  }

  const makeLabel = (from,to) => {
    let start = from.split('-'); let end = to.split('-');
    let ys = (start[0]); let ms = (start[1]); let ds = parseInt(start[2]);
    let yt= parseInt(end[0]); let mt = parseInt(end[1]); let dt = parseInt(end[2]); 
    let res = [];
    let dateReq = [];
    for(let s = ds; s <= dt; s++){
      let sString = '';
      if(s < 9) sString = '0'+s.toString();
      else sString = s.toString();
      res.push(s);
      dateReq.push(ys+'-'+ms+'-'+sString);
    }

    return [res,dateReq];
  }

  const getChartData = () => {
    let from = {From}; let to = {To}; // get From and To from state
    from = from.From.split(' '); to = to.To.split(' '); //split from and to
    let dateFrom = from[0]; let timeFrom = from[1]; // set date and time of from
    let dateTo = to[0]; let timeTo = to[1]; // set date and time of to
    let bgColor = {backgroundColor}.backgroundColor;
    console.log(bgColor);
    console.log(dateFrom,timeFrom,dateTo,timeTo);

    let dataReq = makeLabel(dateFrom,dateTo)[1];
    setLabels(labels);
    // setChartData({...chartData,labels: labels});

    let config = {
      params: {
        dateFrom: dataReq
      }
    };

    let startIndex = Math.floor(Math.random() * backgroundColor.length); 
    axios.get('http://localhost:5000/WlGraph/',config)
    .then(response => {
      if(response.data.length > 0){
        setChartData({
          labels: response.data.map(each => [each.date.split('-')[2],each.time]),
          datasets:[{
            label: 'WlGraph',
            data: response.data.map(each => each.value),
            backgroundColor: response.data.map((each,index) => 
              bgColor[(startIndex+index) % backgroundColor.length])
            }]
          })
      }
    });
  }
    return (
      <div className="SendGraph">
        <div className='ButtonGraph'>
                <div className='From'>
                  <span>FROM: </span><DateTime From={onChangeFrom}/>
                </div>
                <div className='To'>
                  <span>TO: </span><DateTime To={onChangeTo}/>
                </div>
                {/* <button onClick={getChartData}>Graph</button> */}
                <Button
                variant="contained"
                color="primary"
                onClick={getChartData}
                endIcon={<Icon>send</Icon>}
                >
                  Send
                </Button>
                {/* <label for="graphs">Choose your grpah:</label> */}
                {/* <select id="graphs">
                  <option value="WlGraph">WlGraph</option>
                  <option value="RlGraph">RlGraph</option>
                  <option value="QGraph">QGraph</option>
                </select> */}
                <SplitButton options={options}/>
        </div>
        <Graph 
          chartData={chartData} 
          location="BBU" 
          legendPosition="bottom"
        />
      </div>
    );
}

export default SendGraph;