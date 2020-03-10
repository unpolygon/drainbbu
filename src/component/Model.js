import React, {useEffect , useState} from 'react';
import '../style/Model.scss';
import $ from 'jquery';
import FrameDam from '../asset/Frame.png';

const Model = (props) => {
    let v1 = props.v1;
    let minV1 = props.minV1;
    let maxV1 = props.maxV1;
    let v2 = props.v2;
    let tMax = parseInt(props.tMax);
    let tDrain = parseInt(props.tDrain);
    let place = props.place;
    // const [show , setShow] = useState(false);
    // const [chkshow , setChkshow ] = useState(true);
    let chkshow = props.chkshow;
    let hold = false ; 
    let col = '' ;

    // const callBackchkshow = (chkshow) => {
    //     setChkshow(chkshow);
    // }
    useEffect(() => {
        let divPlace = $('div[place='+place+']'); 
        // let water = divPlace.find('div[class=Water]');
        let water = $('div[class^=Water]');
        let label = divPlace.find('div[class=cover-label]').find('div[class=label]');
        let labelNumber = label.find('span[class*=label-number]');
        // callBackchkshow(chkshow)
        console.log("Model_chkshow : ",chkshow);
        if(v1){
            labelNumber.find('span').text(v1);
            // let pos = ((v1-minV1)/(maxV1-minV1))*100;
            let pos = v1*100;
            let waterpos = pos;
            console.log('pos: ',pos);
            if(pos <= 20 || pos == Infinity) pos = 20;
            else if(pos > 87) pos = 87;
            $(document).ready(() => {
                console.log('Intouch')
                labelNumber.css('bottom',pos+'%');
                water.css({'top':`${100-waterpos}%`,'transition-duration': '1s'});
            });
            // console.log('height: ',water.height());
            // console.log('height: ',minV1);
        }

        if(chkshow==true){
            let pos = ((v2-minV1)/(maxV1-minV1))*100;
            console.log('up');
            $(document).ready(() => {
                water.css({'transition-duration': '5s','top':`${100-pos}%`});
            });
            // chkshow = 1 ;
            // timeValue.text(tMax);
            // setTimeout(() => {
            //     divPlace.find('.waterDirection').addClass('down');
            // },5000);
        }else if(chkshow==false){
            let pos = ((v1-minV1)/(maxV1-minV1))*100;
            console.log('down');
            $(document).ready(() => {
                water.css({'transition-duration': '5s','top':`${100-pos}%`});
            });
            // chkshow = 0 ;
            // timeValue.text(tDrain);
            // setTimeout(() => {
            //     divPlace.find('.waterDirection').removeClass('down');
            // },5000);
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
        console.log('v2-wtf ',v2);
    });


    return(
        <div className='Model'>
            <div className='Header'>
                <h2>Model</h2>
                <div className='MotherOfCircle'>
                    <div className='Circle'>&nbsp;</div>
                </div>
                <div className='MotherOfSpace'>
                    <div className='Space'></div>
                </div>
            </div>
            <div className='DrainModel'>
            {/* <div className='Water'><div className='Frame'></div></div> */}
            <div className='Water'></div>
            <img src={FrameDam} alt="Smiley face" height="100%" width="100%" />
            {/* <div className='Water'></div>
            <div className='coverFrame'>
                <div className='Frame'></div>
            </div> */}
            
            </div>
        </div>
    );
}

export default Model;