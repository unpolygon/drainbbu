import React,{useState,useEffect} from 'react';
import SlideValue from './SlideValue';
import '../style/ResultCard.css';
// import ShowValue from './ShowValue.component';
import StatusButton from '../component/StatusButton';
import $ from 'jquery';
// import '../style/ControlPanel.css'

const ResultCard = (props) => {
    const [v2,setV2] = useState(0);
    const [v1,setV1] = useState(0.2);
    const [minV1,setMinV1] = useState(0);
    const [maxV1,setMaxV1] = useState(0);
    const [tMax,setTMax] = useState(0);
    const [tDrain,setTDrain] = useState(0);
    const [chkshow,setChkshow] = useState(false);
    // const [chkFalse,setChkFalse] = useState(false);
    // console.log({v1});

    useEffect(() => {
        
        // formularV2(v1,sumTimeMax);
        // callBackMaxV1(maxV1);
        // callBackMinV1(minV1);
    });
    
    const formularV2 = (v1,sumTimeMax) => {
        console.log('hero')
        v1 = parseFloat(v1);
        setV1(v1);
        sumTimeMax = parseFloat(sumTimeMax);
        Number.prototype.round = function() {
            return Math.round(this*100)/100;
        }        
        let v2 = (0.06868 + (0.0009373 * sumTimeMax) + v1).round();
        setV2(v2);
        formularTMax(v2,sumTimeMax);
        formularTDrain(v2,sumTimeMax);
        props.v1(v1);
    }
    
    const formularTMax = (v2, sumTimeMax) => {
        props.v2(v2);
        let tMax = 101.3988 + (0.1834 * sumTimeMax) + (251.4515*v2);
        setTMax(tMax);
    }
    
    const formularTDrain = (v2, sumTimeMax) => {
        let tDrain = -220.1987 + (6.8215 * sumTimeMax) + (3432.8134 * v2);
        setTDrain(tDrain);
    }
    
    const callBackMaxV1 = (maxV1) => {
        props.maxV1(maxV1)
        setMaxV1(maxV1);
        console.log(maxV1);
      }
    const callBackMinV1 = (minV1) => {
        setMinV1(minV1);
    props.minV1(minV1)

    }
    const callBackchkshow = (chkshow) => {
        setChkshow(chkshow);
        props.chkshow(chkshow)
        console.log("Res_chkshow : ",chkshow);
    }


    return(
        <div className='Controltxt'>
            <div className='Header'>
                <h2>Control</h2>
                <div className='MotherOfCircle'>
                    <div className='Circle'>&nbsp;</div>
                </div>
                <div className='MotherOfSpace'>
                    <div className='Space'></div>
                </div>
            </div>
            <div className="boxshadow">
                    &nbsp;
                    <SlideValue 
                        formularV2={formularV2}
                        minV1 = {callBackMinV1}
                        maxV1 = {callBackMaxV1}
                        chkshow={chkshow}
                        />
                    <StatusButton 
                    v1={v1}
                    maxV1={maxV1}
                    minV1={minV1}
                    v2={v2} 
                    tMax={tMax}
                    tDrain={tDrain}
                    place={props.place}
                    chkshow={callBackchkshow}
                    />
                     &nbsp;
                </div>
        </div>
    );
}

export default ResultCard;