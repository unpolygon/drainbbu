import React from 'react';
import '../style/Model.scss';

const Model = () => {
    return(
        <div className='Model'>
            <div className='Header'>
                <h2>Model</h2>
                <div className='MotherOfCircle'>
                    <div className='Circle'>&nbsp;</div>
                </div>
                <div className='MotherOfSpace'>
                    <div className='Space'></div>
                </div>
            </div>
            <div className='DrainModel'>
            <div className='Water'>&nbsp;</div>
            </div>
        </div>
    );
}

export default Model;