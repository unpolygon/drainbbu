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
    <div style={{display:'flex',marginTop:'50px'}}>
    <div style={{background:"linear-gradient(90deg, rgba(53,61,107,1) 20%, rgba(62,171,168,1) 56%, rgba(234,244,148,1) 87%, rgba(255,211,106,1) 100%)",height:'5px',width:'100%',marginTop:'15px'}}></div>
    &nbsp;&nbsp;&nbsp;
    <h2 style={{textAlign:'center'}}>Overview</h2>
    &nbsp;&nbsp;&nbsp;
    <div style={{background:"linear-gradient(90deg, rgba(255,211,106,1) 0%, rgba(241,141,64,1) 35%, rgba(241,96,96,1) 63%, rgba(255,143,206,1) 100%)",height:'5px',width:'100%',marginTop:'15px'}}></div>
    </div>
    <div className='section'>
    <button class="accordion" >วัตถุประสงค์</button>
    <div class="panel">
    <p>ศึกษาความสัมพันธ์ระหว่างค่าคาดการณ์ฝนตก ระดับน้ำใน
    คลองบางบัว และเวลาที่ใช้ในการระบายน้ำ</p>
    </div>

    <button class="accordion" style={{background: "linear-gradient(90deg, rgba(48,152,167,1) 10%, rgba(119,218,179,1) 33%, rgba(253,128,45,1) 100%)"}}>ปัญหา</button>
    <div class="panel">
    <p>ความสามารถในการรับและการ
ระบายน้ำเมื่อฝนตก :
กรณีศึกษาที่สถานีวัดอัตราการ
ไหลและน้ำาฝนคลองบางบัว
(RF.BKA.02, FW.BBU.01)
เขตบางเขน กรุงเทพ ปี 2561</p>
    </div>

    <button class="accordion" style={{background: "linear-gradient(90deg, rgba(48,152,167,1) 0%, rgba(119,218,179,1) 25%, rgba(255,173,119,1) 57%, rgba(255,98,125,1) 91%)"}}>ทำงานอย่างไร?</button>
    <div class="panel">
    <p>Lorem ipsum...</p>
    </div>
    </div>
    </div>
    );
}

export default OverviewPage;