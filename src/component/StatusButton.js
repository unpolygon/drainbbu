import React from "react";
import "../style/StatusBT.css";
import { Container, Button } from 'reactstrap';
import WaterDown from './WaterDown';
import { Card, CardText, CardBody, CardHeader } from 'reactstrap';


export default class statusButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false, chkshow: true, hold: false, col: '' };
    }

    toggleDiv = () => {
        const { show, chkshow } = this.state;
        this.setState({ show: !show, chkshow: !chkshow })
    }

    render() {
        return (
            <div>
                {this.state.chkshow && <div><Button color="danger" onClick={this.toggleDiv}>water up</Button></div>}
                    <div className="flexrow">
                        {this.state.show && <WaterDown />}
                        {this.state.show && 
                        <Card className="cardstatus">
                        <CardBody>
                            <CardText>เวลาที่ฝนตกจนทำให้น้ำเต็มตลิ่ง : 10 min</CardText>
                        </CardBody>
                        </Card>}
                </div>
            </div>
        );
    }
}
