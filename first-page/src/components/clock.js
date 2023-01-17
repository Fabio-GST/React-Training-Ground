import React, { Component } from 'react';

class Clock extends Component {
  render() {
    return (
       <h1>
        Dia {this.props.Dia} <br /> 
        {new Date().toLocaleTimeString()}
       </h1>
    );
  }
}

export default Clock;