import React,{useEffect, useState} from 'react';
import axios from 'axios';

var RfGraph = require('../algorithm/q.json');

const OverviewPage = () => {
    useEffect(() => {
        
    });
    
     async function addWlGraph(e){
        e.preventDefault();
        for(const each in RfGraph){
            console.log(each,RfGraph[each]);
            let sitKey = RfGraph[each];
            let WlGraph_JSON = {
                // count: count,
                date: sitKey.date,
                time: sitKey.time,
                value: sitKey.value
            }
            await axios.post('http://localhost:5000/QGraph/add', WlGraph_JSON)
            .then(res => console.log(res.data)).catch(err => console.log('Error: '+err));
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
            <button onClick={addWlGraph}>Add Auto WlGraph</button>
        </div>
    );
}

export default AddGraphPage;