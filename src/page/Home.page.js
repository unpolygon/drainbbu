import React from 'react';
// import NavBar from '../component/NavBar';
import Model from '../component/Model';
import ControlPanel from '../component/ControlPanel';
import Scoller from '../component/Scoller'
import ResultCard from '../component/ResultCard'
import '../style/Home.page.scss';
// import '../component/ResultCard';

const HomePage = (props) => {
    let v1 = props.v1;
    let minV1 = props.minV1;
    let maxV1 = props.maxV1;
    let v2 = props.v2;
    let tMax = parseInt(props.tMax);
    let tDrain = parseInt(props.tDrain);
    let place = props.place;
    return(
        <div className='HomePage'>
            <div className='Content'>
                <Model 
                v1={v1}
                maxV1={maxV1}
                minV1={minV1}
                v2={v2} 
                tMax={tMax}
                tDrain={tDrain}
                place={props.place}
                />
                {/* <ControlPanel /> */}
                {/* <Scoller/> */}
                <ResultCard/>

            </div>
        </div>
    );    
}

export default HomePage;