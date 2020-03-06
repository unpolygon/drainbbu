import React, {useEffect , useState} from "react";
import {Card, CardText, Button} from 'reactstrap';
import $ from 'jquery';

const WaterDown = (props) => {
    let v1 = props.v1;
    let minV1 = props.minV1;
    let maxV1 = props.maxV1;
    let v2 = props.v2;
    let tMax = parseInt(props.tMax);
    let tDrain = parseInt(props.tDrain);
    let place = props.place;
    const [show , setShow] = useState(false);
    const [chkshow , setChkshow ] = useState(true);
    let hold = false ; 
    let col = '' ;
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
                water.css({'top':`${100-waterpos}%`,'transition-duration': '1s'});
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

    const ToggleDiv = () => {
        $(document).ready(() => {
            setShow(!show)
            setChkshow(!chkshow)
            console.log(chkshow);
                        // console.log(props.tDrain);
            if(show){
                let timeValuetMax = document.getElementById('tMax');
                timeValuetMax.innerHTML = props.tMax.toFixed(2);
            }
            else if(!show){
                let timeValuetDrain = document.getElementById('tDrain');
                timeValuetDrain.innerHTML = props.tDrain.toFixed(2);
            }
        })
      
    }
    
        return (
            <div>
                <Button color = "danger" style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}} onClick={ToggleDiv}>water down</Button>
                {show && 
                        <Card style={{marginTop:"2%"}}>
                        <CardText>เวลาที่ฝนตกจนน้ำเต็มตลิ่ง : </CardText>
                        <div className='coverTimeValue'>
                            {chkshow && <span id = "tMax" className='timeValue'>0.5</span>}
                            {show && <span id = "tDrain" className='timeValue'>0.5</span>}
                            <span className='unit'>s</span>
                        </div>
                    </Card>
                }
            </div>
        )
    }

export default WaterDown ;