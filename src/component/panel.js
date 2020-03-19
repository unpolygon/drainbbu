import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import SendIcon from '@material-ui/icons/Send';
import CollectionsIcon from '@material-ui/icons/Collections';
import CachedIcon from '@material-ui/icons/Cached';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import AssessmentIcon from '@material-ui/icons/Assessment';
import "../style/Panelja.scss"
import { createMuiTheme , ThemeProvider } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 305,
  },
  listSection: {
    backgroundColor: 'inherit',

  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));
const theme = createMuiTheme({
  typography: {
    fontFamily: ['Prompt', 'sans-serif',].join(','),
    fontSize: 'medium',
  },
})

export default function PinnedSubheaderList() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <List className={classes.root} >
      
      <ListItem >
        <ListItemIcon>
          <CollectionsIcon />
        </ListItemIcon>
        <ListItemText primary="Open data collection" />
      </ListItem>
      <ListItem >
        <ListItemText primary="กำหนดขอบเขตพื้นที่ศึกษาเขตบางเขน รวบรวมข้อมูลน้ำฝน ข้อมูลการระบายน้ำ ช่วงปี พ.ศ. 2560-2561" />
      </ListItem>

        <ListItem >
        <ListItemIcon>
          <CachedIcon />
        </ListItemIcon>
        <ListItemText primary="Data pre-processing" />
      </ListItem>
      <ListItem >
        <ListItemText primary="จัดการข้อมูลให้อยู่ในรูปแบบที่เหมาะสม (clean, missing, replace) สามารถนำไปใช้วิเคราะห์ได้" />
      </ListItem>

        <ListItem >
        <ListItemIcon>
          <LocationSearchingIcon />
        </ListItemIcon>
        <ListItemText primary="Feature Selection" />
      </ListItem>
      <ListItem >
        <ListItemText primary="คัดกรองเลือกเหตุการณ์ฝนตกในพื้นที่ และวิเคราะห์ปัจจัยที่สำคัญหลักๆจากข้อมูลทั้งหมด" />
      </ListItem>

        <ListItem >
        <ListItemIcon>
          <AssessmentIcon />
        </ListItemIcon>
        <ListItemText primary="Data Analytics and Modelling" />
      </ListItem>
      <ListItem >
        <ListItemText primary="-	Scatter plots ระหว่างคู่ตัวแปรหรือ features ที่สำคัญ" />
      </ListItem>
      <ListItem >
        <ListItemText primary="-	สร้าง pairwise correlation matrix ระหว่างตัวแปร" />
      </ListItem>
      <ListItem >
        <ListItemText primary="-	สร้าง regression model เพื่อทำนายเวลาในการระบายน้ำที่สัมพันธ์กับปริมาณฝนที่ตกในพื้นที่ ของแต่ละเหตุการณ์ " />
      </ListItem>
              
            
       
           
           
      
    </List>
    </ThemeProvider>
  );
}