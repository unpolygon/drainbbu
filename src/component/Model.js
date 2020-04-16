import React, {useEffect , useState} from 'react';
import '../style/Model.scss';
import $ from 'jquery';
import FrameDam from '../asset/Frame.png';

const Model = (props) => {
    const [wl,setWl] = useState(props.v1);
    let v1 = props.v1;
    let minV1 = -3;
    let maxV1 = 2;
    let v2 = props.v2;
    let tMax = parseInt(props.tMax);
    let tDrain = parseInt(props.tDrain);
    let place = props.place;
    let chkshow = props.chkshow;
    let show = props.show;
    let col = '' ;
    console.log('v2-wtf-1 ',v2);
    console.log('v1-wtf-1 ',v1);
    var pos;

    useEffect(() => {
        let water = $('div[class^=Water]');
        let labelNumber = $('div[class*=label-number]');
        $('.Water').attr('data-content','-0.4 m');
        if(typeof(v1) != 'undefined'){
            labelNumber.find('span').text(v1);
            pos = ((v1-minV1)/(maxV1-minV1))*100;
            $('.Water').attr('data-content',v1+' m');
            console.log("Model_v1 : ",v1);
            let waterpos = pos;
            console.log('pos: ',pos);
            if(pos < 0) pos = 0
            if(pos > 100) pos = 100
            console.log('Intouch')
            labelNumber.css('bottom',pos+'%');
            water.css({'top':`${100-waterpos}%`,'transition-duration': '1s'});
        }
        if(typeof(chkshow) === "boolean"){
            let x = (chkshow ? v2: v1);
            pos = ((x-minV1)/(maxV1-minV1))*100;
            flipShowWl();
            $('.Water').attr('data-content',x+' m');
            if(pos > 100) pos = 100;
            water.css({'transition-duration': '5s','top':`${100-pos}%`});
            console.log('chk: ',chkshow,'pos: ',pos);
        }

        if(chkshow==true){
            console.log('Model_tMax : ',tMax);
                let timeValuetMax = document.getElementById('tMax');
                console.log('Model_tMax : ',tMax);
                console.log('up_Hr');
                timeValuetMax.innerHTML = (props.tMax).toFixed(2);
            }
        else if(chkshow==false){
            console.log('down');
            console.log('Model_tDrain : ',tDrain);
                let timeValuetDrain = document.getElementById('tDrain');
                console.log('down_Hr');
                console.log('Model_tDrain : ',tDrain);
                timeValuetDrain.innerHTML = (props.tDrain).toFixed(2);
            }

            if(v2 > 0.14 && (chkshow || show) ){
                labelNumber.addClass('ShowValue-high');
                document.getElementById('statusColor').innerHTML = "น้ำท่วมถนน!!";
            }else if(v2 > 0 && (chkshow || show) ){
                labelNumber.addClass('ShowValue-middle');
                labelNumber.removeClass('ShowValue-high');
                document.getElementById('statusColor').innerHTML = "น้ำใกล้ท่วมถนนแล้ว!";
            }else if(v1 > 0.14 && (chkshow || show) ){
                labelNumber.addClass('ShowValue-middle');
                labelNumber.removeClass('ShowValue-high');
                document.getElementById('statusColor').innerHTML = "ระดับน้ำสูงกว่าค่าวิกฤติ!";
            }else if(v2 > -0.4 && (chkshow || show) ){
                labelNumber.removeClass('ShowValue-middle');
                labelNumber.removeClass('ShowValue-high');
                document.getElementById('statusColor').innerHTML = "ระดับน้ำปกติ";
            }
        console.log('v2-wtf ',v2);
    });

    const flipShowWl = () => {
        if(pos > 80){
            $('.Water').addClass('flip');
        }else{
            $('.Water').removeClass('flip');
        }
    }


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
                                        <span className='unit'> Hr</span>
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
                        <span className='unit'> Hr</span>
                    </div>
                </div>}

                { (show || chkshow) && <div className="label-number">
                    <span id="statusColor"></span>
                </div>}
        </div>
    );
}

export default Model;