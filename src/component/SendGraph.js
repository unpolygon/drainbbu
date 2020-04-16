import React, { useState,useEffect} from 'react';
import '../style/SendGraph.scss';
import Graph from './Graph';
import SplitButton from './SplitButton';
import axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'
import $ from 'jquery';

var month = ['Aug','Sep','Oct','Nov'];
var ENDPOINT = 'https://drain-bbu.herokuapp.com/';

const SendGraph = () => {
  var tzoffset = (new Date()).getTimezoneOffset() * 60000;
  const [optionsMonth, setOptionsMonth] = useState(month);
  const [optionsYear, setOptionsYear] = useState([2017]);
  const [monthValue, setMonthValue] = useState(8);
  const [countValue, setCountValue] = useState([1]);
  const [graphData, setGraphData] = useState([]);
  const [computer,setComputer] = useState(true);
  const [indexSituation, setIndexSituation] = useState(0);

  const [graphDate,setGraphDate] = useState('2017-08-14');
  const [wlChartData,setWlChartData] = useState({});
  const [rfChartData,setRfChartData] = useState({});
  const [qChartData,setQChartData] = useState({});
  const [backgroundColor,setBackgroundColor] = useState([
    'rgba(255, 99, 132, 0.6)',
    'rgba(54, 162, 235, 0.6)',
    'rgba(255, 206, 86, 0.6)',
    'rgba(75, 192, 192, 0.6)',
    'rgba(153, 102, 255, 0.6)',
    'rgba(255, 159, 64, 0.6)',
    'rgba(255, 99, 132, 0.6)'
  ]);

  useEffect(() => {
    getChartData();
    onSelectedMonth();
    loadProgressBar();
  },[monthValue]);
  
  useEffect(() => {
    onSelectedSituation(0);
  },[graphData]);

  useEffect(() => {
    console.log("Situation Changed!")
  },[graphDate]);

  function getChartData(){
    console.log('getChart');

    let config = {
      params: {
        month: monthValue
      }
    };

    axios.get(`${ENDPOINT}AddGraph/`,config)
    .then(response => {
      console.log(response);
      if(response.data.length > 0){
        setCountValue(response.data.map(each => each.count));
        setGraphData(response.data);
        onSelectedMonth();
      }
    });
  }

  const onSelectedSituation = (index) => {
    if (graphData.length <= 0) return;
    let graphHeight = $('.Graph').height();
    setComputer(graphHeight >= 200);

    let firstCountGraphData = graphData[0].count;
    let data = graphData.filter(each => each.count == firstCountGraphData+index);
    setGraphDate(data[0].date);
    // console.log('date: ',graphDate,graphData[index].date);

    console.log(data);
    
    let startIndex = Math.floor(Math.random() * backgroundColor.length-1)+1;
    setWlChartData({
      labels: data.map(each => each.time.slice(0,5)),
      datasets:[{
        label: 'Water Level (m)',
        fill:false,
        data: data.map(each => each.wlValue),
        pointBackgroundColor: data.map((each,index) => 
          backgroundColor[(startIndex+index) % (backgroundColor.length)]),
        borderColor: backgroundColor[startIndex],
        },{
          label: 'Reference line',
          fill:false,
          borderDash:[10,10],
          data: Array(data.length).fill(0.14),
          borderColor: backgroundColor[0],
          pointRadius: 0,
        }]
    })
    startIndex = Math.floor(Math.random() * backgroundColor.length);
    setQChartData({
      labels: data.map(each => each.time.slice(0,5)),
      datasets:[{
        label: 'Discharge (m/s)',
        fill:false,
        data: data.map(each => each.qValue),
        borderColor: backgroundColor[startIndex],
        pointBackgroundColor: data.map((each,index) => 
          backgroundColor[(startIndex+index) % backgroundColor.length])
        }]
    })
    startIndex = Math.floor(Math.random() * backgroundColor.length);
    setRfChartData({
      labels: data.map(each => each.time.slice(0,5)),
      datasets:[{
        label: 'Accumulated Rain Fall 1 Hr (mm.)',
        fill:false,
        data: data.map(each => each.rfValue),
        pointBackgroundColor: data.map((each,index) => 
          backgroundColor[(startIndex+index) % backgroundColor.length]),
        borderColor: backgroundColor[startIndex],
        }],
        options: {
          scale: {
              ticks: {
                  suggestedMin: 50,
                  suggestedMax: 100
              }
          }
      }
    })
  }

  const onSelectedMonth = () => {
    let countvalue = {countValue}.countValue;
    let count = (countvalue[countvalue.length-1]-countvalue[0])+1
    return (
      <div>
        <p>Situation:</p>
        <SplitButton 
          // name='Year' 
          options={Array(count).fill(1).map((each,index) => index+1)} 
          index='0'
          sitCallback={onSelectedSituation}  
        />
      </div>
     
    );
  }
    return (
      <div className="SendGraph">
        <div className='ButtonGraph'>
                <div><p>Year:</p><SplitButton name='Year' options={optionsYear} index='0' className='buttonGroup'/></div>
                <div><p>Month:</p><SplitButton name='Month' options={optionsMonth} monthCallback={v => setMonthValue(v)} index='0'/></div>
                {onSelectedMonth()}
        </div>
        <div className='GraphDate'>
          {graphDate}       
        </div>
        <Graph 
          chartData={rfChartData}
          text = 'The Amount of Rain Fall'
          title = 'Accumulated Rain Fall 1 Hr (mm.) - 2017'
          location="BBU" 
          legendPosition="bottom"
          computer = {computer}
        />
        <Graph 
          chartData={qChartData} 
          text = 'Discharge (m/s)'
          title = 'Discharge (m/s) - 2017'
          location="BBU" 
          legendPosition="bottom"
          computer = {computer}
          />
        <Graph 
          chartData={wlChartData} 
          text="Water Level (m)" 
          title = 'Water Level (m) - 2017'
          location="BBU" 
          legendPosition="bottom"
          computer = {computer}
        />
      </div>
    );
}

export default SendGraph;