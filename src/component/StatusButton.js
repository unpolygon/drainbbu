import React, {useEffect , useState}from "react";
import "../style/StatusBT.css";
import { Container, Button } from 'reactstrap';
import $ from 'jquery';

const StatusButton = (props) => {
    let v1 = props.v1;
    let minV1 = props.minV1;
    let maxV1 = props.maxV1;
    let v2 = props.v2;
    let tMax = parseInt(props.tMax);
    let tDrain = parseInt(props.tDrain);
    let place = props.place;
    const [show , setshow] = useState(false);
    const [chkshow , setChkshow ] = useState(true);
    let hold = false ; 
    let col = '' ;
    
    const callBackchkshow = (chkshow) => {
        setChkshow(chkshow);
        props.chkshow(chkshow);
        console.log("StatusBT_chkshow : ",chkshow);
    }

    const callBackshow = (show) => {
        setshow(show);
        props.show(show);
        console.log("StatusBT_show : ",show);
    }

    const ToggleDiv = () => {
        callBackchkshow(chkshow)
        callBackshow(show)
        $(document).ready(() => {
            setshow(!show)
            setChkshow(!chkshow)
                console.log('chkshow',chkshow);
                console.log('show',show);
            // console.log(props.tDrain);
            // if(!show){
            //     let timeValuetMax = document.getElementById('tMax');
            //     timeValuetMax.innerHTML = props.tMax.toFixed(2);
            
            
            // }
            // else if(show){
            //     let timeValuetDrain = document.getElementById('tDrain');
            //     timeValuetDrain.innerHTML = props.tDrain.toFixed(2);
            //     console.log('chkshow',chkshow);
            //     console.log('show',show);   
            // }
        })  
    }
    // const callBackchkshow = (chkshow) => {
    //     setChkshow(chkshow);
    //     props.chkshow(chkshow)
    //     console.log("StatusBT_chkshow : ",chkshow);
    // }

    
        return (
            <div className="StatusButton">
                {chkshow && <Button style={{background: "#668DBB", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} onClick={ToggleDiv}>โหมดจำลองน้ำขึ้น</Button>}
                        {show && <Button color = "danger" style={{boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}} onClick={ToggleDiv}>โหมดจำลองน้ำลง</Button>}
                        {/* &nbsp;
                        {show && 
                        <div className = "setCard">
                            <div>เวลาที่ฝนตกจนน้ำเต็มตลิ่ง : </div>
                            &nbsp;
                            <div className='coverTimeValue'>
                                {show && <span id = "tMax" className='timeValue'>0.5</span>}
                                {chkshow && <span id = "tDrain" className='timeValue'>0.5</span>}
                                <span className='unit'> min</span>
                            </div>
                        </div>
                        } */}

                        {/* {chkshow && 
                        <div className = "setCard">
                            <div>เวลาที่ระบายน้ำจนเสร็จ :</div>
                            &nbsp;
                            <div className='coverTimeValue'>
                                {show && <span id = "tMax" className='timeValue'>0.5</span>}
                                {chkshow && <span id = "tDrain" className='timeValue'>0.5</span>}
                                <span className='unit'> min</span>
                            </div>
                        </div>
                        } */}
            
            <div>&nbsp;</div>
            </div>
        );
}

export default StatusButton;