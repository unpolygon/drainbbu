import React from "react";
import {Button} from 'reactstrap';

export default class BoxInstall extends React.Component {

    constructor(props) {
        super(props);
        // this.state = { url1: '', url2: ''
        // }
            
        // this.download = this.download.bind(this)
    }
    render() {
        return (
            <div>
                <Button color="primary" onClick={this.download}>water down</Button>
            </div>
        )
    }
}