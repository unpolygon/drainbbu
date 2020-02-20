import React from 'react';
import NavBar from '../component/NavBar';
import Model from '../component/Model';
import ControlPanel from '../component/ControlPanel';
import '../style/Home.page.scss';

const HomePage = () => {
    return(
        <div className='Homepage'>
            <NavBar />
            <Model />
            <ControlPanel />
        </div>
    );    
}

export default HomePage;