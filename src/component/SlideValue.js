import React, {useState,useEffect} from 'react';
import Scoller from './Scoller';
import '../style/SlideValue.css';

const SlideValue = (props) => {
  const [sumTimeMax,setSumTimeMax] = useState(0);
  const [v1,setV1] = useState(0);
  const [minV1,setMinV1] = useState(0);
  const [maxV1,setMaxV1] = useState(0);
  let show = props.show;
  let chkshow = props.chkshow;

  useEffect(() => {
    props.formularV2(v1,sumTimeMax);
    props.maxV1(maxV1);
    props.minV1(minV1);
    console.log(v1,'Slide Value');
  });

  const callBackV1 = (v1) => {
    setV1(v1);
  }
  const callBackSumTimeMax = (sumTimeMax) => {
    setSumTimeMax(sumTimeMax);
  }
  const callBackMaxV1 = (maxV1) => {
    setMaxV1(maxV1);
  }
  const callBackMinV1 = (minV1) => {
    setMinV1(minV1);
  }

  return(
    
    <div className='SlideValue'>
      <span>ระดับน้ำเริ่มต้น (เมตร)</span>
      <Scoller v1={callBackV1} maxV1={callBackMaxV1} minV1={callBackMinV1}/>
      {show && <span>ปริมาณฝนสะสมก่อนน้ำขึ้นสูงสุด (มม.)</span>}
      {chkshow && <span>ปริมาณฝนสะสมหลังน้ำขึ้นสูงสุด (มม.)</span>}
      <Scoller sumTimeMax={callBackSumTimeMax}/>
    </div>
  );
}

export default SlideValue;