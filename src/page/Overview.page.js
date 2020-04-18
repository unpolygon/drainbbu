import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../style/Overviewpage.scss'
import { flexbox } from '@material-ui/system';
import BBU from '../asset/bbu.PNG'
import Flood from '../asset/flood.jpg'
import Panel from '../component/panel.js'
import $ from 'jquery';
import SourceBBU from '../component/SourceBBU';



const OverviewPage = () => {
    useEffect(() => {
        var acc = document.getElementsByClassName("accordion");
        var i;
        
        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            }
          });
        }
});
    return(
    <div className ='OverviewPage'>
    <SourceBBU/>
    <div style={{display:'flex',marginTop:'50px'}}>
    <div style={{background:"linear-gradient(90deg, rgba(53,61,107,1) 20%, rgba(62,171,168,1) 56%, rgba(234,244,148,1) 87%, rgba(255,211,106,1) 100%)",height:'5px',width:'100%',marginTop:'15px'}}></div>
    &nbsp;&nbsp;&nbsp;
    <h2 style={{textAlign:'center'}}>Overview</h2>
    &nbsp;&nbsp;&nbsp;
    <div style={{background:"linear-gradient(90deg, rgba(255,211,106,1) 0%, rgba(241,141,64,1) 35%, rgba(241,96,96,1) 63%, rgba(255,143,206,1) 100%)",height:'5px',width:'100%',marginTop:'15px'}}></div>
    </div>
    <div className='section'>
    <button class="accordion" style={{background: "linear-gradient(104.67deg, #605483 20.79%, rgba(170, 238, 84, 0.39) 137.95%)"}} >วัตถุประสงค์</button>
    <div class="panel">
    <p>ศึกษาความสัมพันธ์ระหว่างค่าคาดการณ์ฝนตกระดับน้ำในคลองบางบัวและเวลาที่ใช้ในการระบายน้ำ</p>
    </div>

    <button class="accordion" style={{background: "linear-gradient(104.67deg, #6B4964 20.79%, rgba(255, 233, 153, 0.7) 137.95%)"}}>ปัญหา</button>
    <div class="panel">
    <p>ความสามารถในการรับและการระบายน้ำเมื่อฝนตก :
กรณีศึกษาที่สถานีวัดอัตราการไหลและน้ำฝนคลองบางบัว (RF.BKA.02, FW.BBU.01) เขตบางเขน กรุงเทพ ปี 2561
</p>
<img src={BBU} alt="Smiley face" height="70%" width="70%" class="center" />
&nbsp;
<img src={Flood} alt="Smiley face" height="70%" width="70%" class="center" />
&nbsp;
  </div>

    <button class="accordion" style={{background: "linear-gradient(104.67deg, #8C3F64 20.79%, #DB9771 103.85%)"}}>แผนผังการดำเนินงาน</button>
    <div class="panel">
    <p>
    &nbsp;
    <Panel />
    &nbsp;
    </p>
    </div>
    </div>
    &nbsp;
    </div>
    
    );
    
}

export default OverviewPage;