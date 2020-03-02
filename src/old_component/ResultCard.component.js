import React,{useState} from 'react';
import SlideValue from './SlideValue.component';
import '../style/ResultCard.component.css';
import ShowValue from './ShowValue.component';

const ResultCard = (props) => {
    const [v2,setV2] = useState(0);
    const [v1,setV1] = useState(0.2);
    const [minV1,setMinV1] = useState(0);
    const [maxV1,setMaxV1] = useState(0);
    const [tMax,setTMax] = useState(0);
    const [tDrain,setTDrain] = useState(0);
    console.log({v1});

    const formularV2 = (v1,sumTimeMax) => {
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
    }

    const formularTMax = (v2, sumTimeMax) => {
        let tMax = 101.3988 + (0.1834 * sumTimeMax) + (251.4515*v2);
        setTMax(tMax);
    }

    const formularTDrain = (v2, sumTimeMax) => {
        let tdrain = -220.1987 + (6.8215 * sumTimeMax) + (3432.8134 * v2);
        setTDrain(tdrain);
    }

    const callBackMaxV1 = (maxV1) => {
        setMaxV1(maxV1);
        console.log(maxV1);
      }
      const callBackMinV1 = (minV1) => {
        setMinV1(minV1);
      }

    return(
        <div className = 'ResultCard'>
            <ShowValue 
                v1={v1}
                maxV1={maxV1}
                minV1={minV1}
                v2={v2} 
                tMax={tMax}
                tDrain={tDrain}
                place={props.place}/>
            <SlideValue 
                formularV2={formularV2}
                minV1 = {callBackMinV1}
                maxV1 = {callBackMaxV1}
                />
        </div>
    );
}

export default ResultCard;