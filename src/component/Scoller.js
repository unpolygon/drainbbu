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
        <div className='Scoller'>
            {/* <span className='title'>{props.v1 ? 'v1' : 'sumTimeMax'}</span> */}
            <input type='range' 
                onChange={handleOnChange} 
                min ={props.v1 ? '0.2' : '0'} 
                max ={props.v1 ? '1' : '500'} 
                step= {props.v1 ? '0.1' : '25'} 
                defaultValue={props.v1 ? '0.2' : '0'}/>
            <span id='value'>{props.v1 ? '0.2' : '0'}</span>
        </div>
    );
}

export default Scoller;