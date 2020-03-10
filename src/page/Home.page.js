import React, {useState,useEffect} from 'react';
// import NavBar from '../component/NavBar';
import Model from '../component/Model';
// import ControlPanel from '../component/ControlPanel';
import Scoller from '../component/Scoller';
import ResultCard from '../component/ResultCard';
import SourceBBU from '../component/SourceBBU';
import '../style/Home.page.scss';
import $ from 'jquery';

const HomePage = (props) => {
    const [v1,setV1] = useState(0);
    const [minV1,setMinV1] = useState(0);
    const [maxV1,setMaxV1] = useState(0);
    const [v2,setV2] = useState(0)
    const [chkshow,setChkshow] = useState(props.chkshow);


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
    

    return(
        <div className='HomePage'>
          <SourceBBU/>
            <div className='Content'>
                <Model 
                v1={v1}
                maxV1={maxV1}
                minV1={minV1}
                v2={v2} 
                chkshow={chkshow}
                />
                <ResultCard
                 v1={callBackV1} maxV1={callBackMaxV1} minV1={callBackMinV1} v2={callBackV2} chkshow={callBackchkshow}
                />

            </div>
        </div>
    );    
}

export default HomePage;