import React from 'react';
import '../style/Scoller.css'
import $ from 'jquery';

const Scoller = (props) => {

    const handleOnChange = (e) =>{
        console.log(props.v1,props.sumTimeMax);
        $(e.target).closest('div').find('span[id=value]').text(e.target.value);
        if(props.v1){
            props.minV1(e.target.min);
            props.maxV1(e.target.max);
            props.v1(e.target.value);
        }else if(props.sumTimeMax){
            props.sumTimeMax(e.target.value)
        }
    }
 
    return(
        // <div>
        <div className='Scoller'>
            <input type='range' 
                onChange={handleOnChange} 
                min ={props.v1 ? '-0.4' : '0'} 
                max ={props.v1 ? '0.8' : '500'} 
                step= {props.v1 ? '0.1' : '25'} 
                defaultValue={props.v1 ? '-0.4' : '0'}
                list="ticks"
                />
            <datalist id="ticks">
                <option>0.4</option>
                <option>0.6</option>
                <option>0.9</option>
            </datalist>
            <span id='value' className="markvalue">{props.v1 ? '-0.4' : '0'}</span>
        </div>

        
    );
}

export default Scoller;