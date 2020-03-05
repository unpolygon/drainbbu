import React from 'react';
import styled from 'styled-components';

const sliderThumbStyles = (props) => (`
  width: 25px;
  height: 25px;
  background: ${props.color};
  cursor: pointer;
  // outline: 5px solid #333;
  opacity: ${props.opacity};
  -webkit-transition: .2s;
  transition: opacity .2s;
  border-radius: 10px;
`);

const Styles = styled.div`
  display: flex;
  align-items: center;
  color: #888;
  margin-top: 2rem;
  margin-bottom: 2rem;

  .value {
    flex: 1;
    font-size: 2rem;
  }

  .slider {
    flex: 6;
    -webkit-appearance: none;
    width: 100%;
    height: 5px;
    border-radius: 5px;
    background: #707070;
    outline: none;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${props => sliderThumbStyles(props)}
    }

    &::-moz-range-thumb {
      ${props => sliderThumbStyles(props)}
    }
  }
`;


export default class ControlPanel extends React.Component {
  state = {
    value: 0
  }

  handleOnChange = (e) => {
    const { value } = e.target;
    this.props.handleUpdateColor(this.props.hexColor, value);
    this.setState({ value });
    if(this.props.value){
      this.props.v(e.target.value);
      this.props.maxV1(e.target.max);
      this.props.minV1(e.target.min);
      }
    else if(this.props.sumTimeMax){
      this.props.sumTimeMax(e.target.value)
  }
  }

  render() {
    return (
      <Styles opacity={this.state.value > 2 ? (this.state.value / 10) : .2} color={this.props.color}>
        <input type="range" min={this.props.value ? '0.2' : '0'} max={this.props.value ? '1' : '500'} step= {this.props.value ? '1' : '50'} defaultValue={this.props.value ? '0.2' : '0'} value={this.state.value} className="slider" onChange={this.handleOnChange} />
        <div className="value">{this.state.value}</div>
      </Styles>
    )
  }
}