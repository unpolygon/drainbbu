import React, { useState } from 'react';
import "../style/SourceBBU.css"
import { MdLocationOn } from "react-icons/md";
import KU from '../asset/KU.png'
import SSN from '../asset/SSN.png'
const SourceBBU = (props) => {

    return (
      
      <div className="SourceBBU">
          <h5 style={{color:'black'}}>โครงการวิเคราะห์ความสามารถในการระบายน้ำของเครือข่ายการไหลกรุงเทพมหานคร</h5>
          <div className='mother'>
          <div className='data' style={{display:'flex',marginLeft:'-15px'}}>
          <MdLocationOn className="locatePos"/>
          <div className="positionBBU-data">
            <h4>FW BBU</h4>
            <h6>ข้อมูลจากสถานีตรวจวัดปริมาณและอัตราการไหลของน้ำคลองบางบัว</h6>
          </div>
          </div>
          <div className="logo2">
          <img src={KU}  height="60px" width="60px" />
          &nbsp;&nbsp;
          <img src={SSN}  height="60px" width="60px" />
          </div>
          </div>
          
        </div>
      );
  }
  export default SourceBBU;