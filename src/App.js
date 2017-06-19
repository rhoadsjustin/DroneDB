import React, { Component } from 'react';
import {Modal, Button, Icon, Row} from 'react-materialize';
import Dronecard from './DroneCard.js';
import Partscard from './PartsCard.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <Modal
	           header='Welcome to DroneDB'
	           trigger={<Button waves='light'>Welcome to Build a Drone<Icon right>insert_chart</Icon></Button>}>
	            <p>We want to help people who are just starting to dive into drone racing to know how to build a successful, fast drone!</p>
        </Modal>
      </div>
    <Row>
      <Dronecard />
      <Partscard />
    </Row>
  </div>
    );
  }
}

export default App;
