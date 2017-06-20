import React, { Component } from 'react';
import {Row} from 'react-materialize';
import $ from 'jquery';
import Dronecard from './DroneCard.js';
import Partscard from './PartsCard.js';

class BuildContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { frames: [] }
  }
  loadFramesFromServer() {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3001/api/parts?category=frame'
    })
    .then((res) => {
      this.setState({ frames: res.parts });
    }, (err) => {
      console.log('get parts error', err)
    })
  }
  componentDidMount() {
    this.loadFramesFromServer();
  }
  render() {
    return (
      <Row>
        <Dronecard />
        <Partscard
        frames={this.state.frames}/>
      </Row>
    )
  }
}

export default BuildContainer;
