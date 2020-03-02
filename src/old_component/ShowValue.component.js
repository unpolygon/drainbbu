import React, {useEffect} from 'react';
import '../style/ShowValue.component.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import $ from 'jquery';

const ShowValue = (props) => {
    let v1 = props.v1;
    let minV1 = props.minV1;
    let maxV1 = props.maxV1;
    let v2 = props.v2;
    let tMax = parseInt(props.tMax);
    let tDrain = parseInt(props.tDrain);
    let place = props.place;
    useEffect(() => {
        let divPlace = $('div[place='+place+']'); 
        let water = divPlace.find('div[class=water]');
        let label = divPlace.find('div[class=cover-label]').find('div[class=label]');
        let labelNumber = label.find('span[class*=label-number]');
        if(v1){
            labelNumber.find('span').text(v1);
            let pos = ((v1-minV1)/(maxV1-minV1))*100;
            let waterpos = pos;
            console.log('pos: ',pos);
            if(pos <= 0 || pos == Infinity) pos = 0;
            else if(pos > 87) pos = 87;
            $(document).ready(() => {
                labelNumber.css('bottom',pos+'%');
                // water.css({'top':`${100-waterpos}%`,'transition-duration': '1s'});
            });
            // console.log('height: ',water.height());
            // console.log('height: ',minV1);
        }
        $(document).ready(() => {
            if(v2 > 1.3){
                labelNumber.addClass('ShowValue-high');
            }else if(v2 > 0.7){
                labelNumber.addClass('ShowValue-middle');
                labelNumber.removeClass('ShowValue-high');
            }else{
                labelNumber.removeClass('ShowValue-middle');
                labelNumber.removeClass('ShowValue-high');
            }
        })
        console.log('v2 ',v2);
    });

    const handleClick = () => {
        let place = props.place;
        let divPlace = $('div[place='+place+']'); 
        let water = divPlace.find('div[class=water]');
        let timeValue = divPlace.find('.coverTimeValue .timeValue');
        let waterDirection = divPlace.find('.waterDirection').hasClass('down');
        divPlace.find('.waterDirection').prop('disabled','true');
        if(!waterDirection){
            let pos = ((v2-minV1)/(maxV1-minV1))*100;
            console.log('up');
            // water.css({'transition-duration': '5s','top':`${100-pos}%`});
            water.addClass('waterAnimation');
            timeValue.text(tMax);
            setTimeout(() => {
                divPlace.find('.waterDirection').addClass('down');
            },5000);
        }else{
            let pos = ((v1-minV1)/(maxV1-minV1))*100;
            // water.css({'transition-duration': '5s','top':`${100-pos}%`});
            water.removeClass('waterAnimation');

            console.log('down');
            timeValue.text(tDrain);
            setTimeout(() => {
                divPlace.find('.waterDirection').removeClass('down');
            },5000);
        }
    }
    
    return(
        <div className='ShowValue' place={props.place}>
            <ArrowUpwardIcon className='waterDirection' onClick={handleClick}/>
            <div className='coverTimeValue'>
                <span className='timeValue'>0.5</span><span className='unit'>s</span>
            </div>
            <div className='water'>&nbsp;</div>
            <div className='cover-label'>
                <div className='label'>
                    <span className='label-number'>
                        <ArrowBackIosIcon /><span>{props.maxV1}</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ShowValue;