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
    let show = props.show;
    const [chkHr , setChkHr ] = useState(false);
    const [chkMin , setChkMin ] = useState(true);
    let col = '' ;

    // const callBackchkshow = (chkshow) => {
    //     setChkshow(chkshow);
    // }
    useEffect(() => {
        let divPlace = $('div[place='+place+']'); 
        // let water = divPlace.find('div[class=Water]');
        let water = $('div[class^=Water]');
        let labelNumber = $('div[class*=label-number]');
        // callBackchkshow(chkshow)
        console.log("Model_chkshow : ",chkshow);
        console.log("Model_show : ",show);
        if(v1){
            labelNumber.find('span').text(v1);
            // let pos = ((v1-minV1)/(maxV1-minV1))*100;
            console.log("Model_v1 : ",v1);
            let pos = ((v1+1.15)*100)/3;
            let waterpos = pos;
            console.log('pos: ',pos);
            if(pos <= 20 || pos == Infinity) pos = 20;
            else if(pos > 1.85) pos = 1.85;
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
            if(pos > 100) pos = 100;
            console.log('Model_tMax : ',tMax);
            $(document).ready(() => {
                if(tMax > 59){
                    water.css({'transition-duration': '5s','top':`${100-pos}%`});
                    let timeValuetMax = (document.getElementById('tMax'))/60;
                    console.log('Model_tMax : ',tMax);
                    console.log('up_Hr');
                    setChkHr(true)
                    setChkMin(false)
                    timeValuetMax.innerHTML = ((props.tMax)/60).toFixed(2);
                }
                else{
                    water.css({'transition-duration': '5s','top':`${100-pos}%`});
                    let timeValuetMax = document.getElementById('tMax');
                    console.log('up_min');
                    setChkMin(true)
                    setChkHr(false)
                    timeValuetMax.innerHTML = props.tMax.toFixed(2);
                }
            });
        }else if(chkshow==false){
            let pos = ((v1-minV1)/(maxV1-minV1))*100;
            if(pos > 100) pos = 100;
            console.log('down');
            console.log('Model_tDrain : ',tDrain);
            $(document).ready(() => {
                if(tDrain > 59){
                    water.css({'transition-duration': '5s','top':`${100-pos}%`});
                    let timeValuetDrain = document.getElementById('tDrain');
                    setChkHr(true)
                    setChkMin(false)
                    console.log('down_Hr');
                    console.log('Model_tDrain : ',tDrain);
                    timeValuetDrain.innerHTML = ((props.tDrain)/60).toFixed(2);
                }
                else{
                    water.css({'transition-duration': '5s','top':`${100-pos}%`});
                    let timeValuetDrain = (document.getElementById('tDrain'));
                    setChkMin(true)
                    setChkHr(false)
                    console.log('down_min');
                    timeValuetDrain.innerHTML = props.tDrain.toFixed(2);
                }
            });
        }

        $(document).ready(() => {
            if(v2 > 1.3 && (chkshow || show) ){
                labelNumber.addClass('ShowValue-high');
                document.getElementById('statusColor').innerHTML = "น้ำท่วมถนน!!";
            }else if(v2 > 0.7 && (chkshow || show) ){
                labelNumber.addClass('ShowValue-middle');
                labelNumber.removeClass('ShowValue-high');
                document.getElementById('statusColor').innerHTML = "น้ำใกล้ท่วมถนนแล้ว!";
            }else if(v2 > -0.4 && (chkshow || show) ){
                labelNumber.removeClass('ShowValue-middle');
                labelNumber.removeClass('ShowValue-high');
                document.getElementById('statusColor').innerHTML = "ระดับน้ำปกติ";
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
            </div>
                {chkshow && 
                            <div className = "setCard">
                                <span>เวลาที่ฝนตกจนน้ำเต็มตลิ่ง : </span>
                                &nbsp;
                                <div className='coverTimeValue'>
                                    {chkshow && <span id = "tMax" className='timeValue'>0.5</span>}
                                    {show && <span id = "tDrain" className='timeValue'>0.5</span>}
                                    {chkMin &&<span className='unit'> min</span>}
                                    {chkHr &&<span className='unit'> Hr</span>}
                                </div>
                            </div>
                            }

                {show && 
                <div className = "setCard">
                    <span>เวลาที่ระบายน้ำจนเสร็จ :</span>
                    &nbsp;
                    <div className='coverTimeValue'>
                        {chkshow && <span id = "tMax" className='timeValue'>0.5</span>}
                        {show && <span id = "tDrain" className='timeValue'>0.5</span>}
                        {chkMin &&<span className='unit'> min</span>}
                        {chkHr &&<span className='unit'> Hr</span>}
                    </div>
                </div>}

                { (show || chkshow) && <div className="label-number">
                    <span id="statusColor"></span>
                </div>}
        </div>
    );
}

export default Model;