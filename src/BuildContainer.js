import React, { Component } from 'react';
import Dronecard from './DroneCard.js';
import Partscard from './PartsCard.js';

class BuildContainer extends Component {
  render() {
    return (
      <Row>
        <Dronecard />
        <Partscard />
      </Row>
    )
  }
}
