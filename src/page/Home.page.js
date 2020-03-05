import React from 'react';
// import NavBar from '../component/NavBar';
import Model from '../component/Model';
import ControlPanel from '../component/ControlPanel';
import '../style/Home.page.scss';

const HomePage = () => {
    return(
        <div className='HomePage'>
            <div className='Content'>
                <Model />
                <ControlPanel />
            </div>
        </div>
    );    
}

export default HomePage;