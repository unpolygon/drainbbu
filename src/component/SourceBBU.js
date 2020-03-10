import React, { useState } from 'react';
import "../style/SourceBBU.css"
import { MdLocationOn } from "react-icons/md";

const SourceBBU = (props) => {

    return (
      <div className="SourceBBU">
          <MdLocationOn className="locatePos"/>
          <div className="positionBBU-data">
            <h4>FW BBU</h4>
            <h6>ข้อมูลจากสถานีตรวจวัดปริมาณและอัตราการไหลของน้ำคลองบางบัว</h6>
          </div>
        </div>
      );
  }
  export default SourceBBU;