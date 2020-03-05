import React from "react";
import "../style/StatusBT.scss";
import { Container, Button } from 'reactstrap';
import WaterDown from './WaterDown';


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
                {this.state.show && <WaterDown />}
            </div>
        );
    }
}
