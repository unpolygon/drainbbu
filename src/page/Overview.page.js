import React,{useEffect, useState} from 'react';
import axios from 'axios';
import AddGraphPage from './AddGraph.page';


const OverviewPage = () => {
    return(
        <div className ='OverviewPage'>
            Hello OverviewPage
            <AddGraphPage />
        </div>
    );
}

export default OverviewPage;