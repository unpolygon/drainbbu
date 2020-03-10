import React, { Component } from 'react';
import copy from 'copy-to-clipboard';
import styled from 'styled-components';
import Slider from '../component/Slider';
import StatusButton from '../component/StatusButton'
import "../style/ControlPanel.css"
import { Card, CardText, CardBody, CardHeader } from 'reactstrap';


const Styles = styled.div`
  .ControlPanel {
    display: flex;
    justify-content: center;
  }

  .wrapper {
    // margin-top: 20vh;
    width: 50%;
  }

  h1 {
    margin-bottom: 0.5rem;
  }

  button {
    padding: 0;
    border: 0;

    &:focus {
      outline: none;
    }

    input {
      background-color: #${props => props.color};
      display: flex;
      text-align: center;
      color: white;
      border: 0;
      outline: 0;
      padding: 0.5rem 0 0.5rem 0;
      font-size: 1.2em;
      user-select: none;
      cursor: pointer;

      &:focus {
        outline: none;
      }
    }
  }
`;


export default class ControlPanel extends Component {

  state = {
    showCopyText: false,
    v2 : 0,
    v1: 0.2,
    minV1: 0,
    maxV1 : 0,
    tMax : 0,
    tDrain : 0
  }

  handleUpdateV = (value) => {
    
  }

  handleUpdateSum = (value) => {

  }

  toggleShowCopyText = () => {
    this.setState(
      { showCopyText: true },
      () => setTimeout(() => this.setState({ showCopyText: false }), 1000)
    )
  }

  handleCopyToClipboard = () => {
    copy('#' + this.state.color);
    this.toggleShowCopyText();
  }

  render() {
    return (
      <div className='Controltxt'>
          <div className='Header'>
                <h2>Control</h2>
                <div className='MotherOfCircle'>
                    <div className='Circle'>&nbsp;</div>
                </div>
                <div className='MotherOfSpace'>
                    <div className='Space'></div>
                </div>
            </div>
        <div className="boxshadow">
          <Styles color={this.state.color}>
            <div className="ControlPanel">
              <div className="wrapper">
                {/* <button onClick={this.handleCopyToClipboard}> */}
                  <input
                    type="text"
                    value={this.state.showCopyText ? 'Copied!' : `#${this.state.color}`}
                    disabled="disabled"
                  />
                {/* </button> */}
                <Slider color="#FF4136" hexColor="red" handleUpdateV={this.handleUpdateV} />
                <Slider color="#3D9970" hexColor="green" handleUpdateSum={this.handleUpdateSum} />
              </div>
            </div>
          </Styles>
          <div className="flexrow">
            <StatusButton/>
          </div>
        </div>
      </div>
    );
  }
}