import React, {useState,useEffect} from 'react';
// import NavBar from '../component/NavBar';
import Model from '../component/Model';
// import ControlPanel from '../component/ControlPanel';
import Scoller from '../component/Scoller'
import ResultCard from '../component/ResultCard'
import '../style/Home.page.scss';
import $ from 'jquery';
// import '../component/ResultCard';

const HomePage = (props) => {
    const [v1,setV1] = useState(0);
    const [minV1,setMinV1] = useState(0);
    const [maxV1,setMaxV1] = useState(0);
    const [v2,setV2] = useState(0)
    const [chkshow,setChkshow] = useState(props.chkshow);
    // let v1 = props.v1;
    // let minV1 = props.minV1;
    // let maxV1 = props.maxV1;
    // let v2 = props.v2;
    // let tMax = parseInt(props.tMax);
    // let tDrain = parseInt(props.tDrain);
    // let place = props.place;


    const callBackV1 = (v1) => {
        setV1(v1);
        console.log({v1});
      }
      const callBackV2 = (v2) => {
        setV2(v2);
      }
      const callBackMaxV1 = (maxV1) => {
        setMaxV1(maxV1);
      }
      const callBackMinV1 = (minV1) => {
        setMinV1(minV1);
      }
      const callBackchkshow = (chkshow) => {
        setChkshow(chkshow);
        console.log({chkshow});
    }
    
    // const handleOnChange = (e) =>{
    //     props.v1(e.target.v1);
    //     props.maxV1(e.target.max);
    //     props.minV1(e.target.min);
    // }

    return(
        <div className='HomePage'>
            <div className='Content'>
                <Model 
                v1={v1}
                maxV1={maxV1}
                minV1={minV1}
                v2={v2} 
                chkshow={chkshow}
                // place={props.place}
                />
                {/* <ControlPanel /> */}
                {/* <Scoller/> */}
                <ResultCard
                 v1={callBackV1} maxV1={callBackMaxV1} minV1={callBackMinV1} v2={callBackV2} chkshow={callBackchkshow}
                    // onChange={handleOnChange} 
                    // v1={v1}
                    // maxV1={maxV1}
                    // minV1={minV1}
                    // v2={v2} 
                    // tMax={tMax}
                    // tDrain={tDrain}
                    // place={props.place}
                />

            </div>
        </div>
    );    
}

export default HomePage;