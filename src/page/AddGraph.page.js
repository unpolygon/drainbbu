import React,{useEffect, useState} from 'react';
import axios from 'axios';

var RfGraph = require('../algorithm/rf.json');

const AddGraphPage = () => {
    useEffect(() => {
        
    });
    
     async function addGraph(e){
        e.preventDefault();
        for(const sit in RfGraph){
            // console.log('sit: ',sit,RfGraph[sit]);
            for(const each in RfGraph[sit]){
                // console.log('sitEach: ',RfGraph[sit][each]);
                let sitEach = RfGraph[sit][each];
                let Graph_JSON = {
                        'count':sit,
                        'date':sitEach.date,
                       'month':sitEach.month,
                       'year':sitEach.year,
                       'time':sitEach.time,
                        'rfValue':sitEach.rfValue,
                        'qValue':sitEach.qValue,
                        'wlValue':sitEach.wlValue
            }
            // console.log(Graph_JSON);
            await axios.post('http://localhost:5000/AddGraph/add', Graph_JSON)
            .then(res => console.log(res.data)).catch(err => console.log('Error: '+err));
            }
            
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        // let ICount = document.getElementById('Count');
        let IDate = document.getElementById('Date');
        let ITime = document.getElementById('Time');
        let IValue = document.getElementById('Value');
        const WlGraph_JSON = {
            // count: ICount.value,
            date: IDate.value,
            time: ITime.value,
            value: IValue.value
        };
        axios.post('http://localhost:5000/WlGraph/add', WlGraph_JSON)
        .then(res => console.log(res.data));

        // ICount.value = '';
        IDate.value = '';
        ITime.value = '';
        IValue.value = '';
    }

    return(
        <div className ='AddGraphPage'>
            {/* <input placeholder='Count' id='Count'></input> */}
            <input placeholder='Date' id='Date'></input>
            <input placeholder='Time' id='Time'></input>
            <input placeholder='Value' id='Value'></input>
            <button onClick={onSubmit}>Add WlGraph</button>
            <button onClick={addGraph}>Add Auto WlGraph</button>
        </div>
    );
}

export default AddGraphPage;