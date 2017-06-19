import React, { Component } from 'react';
import {Modal, Button, Icon, Row, Navbar, NavItem} from 'react-materialize';
import Dronecard from './DroneCard.js';
import Partscard from './PartsCard.js';
import Landing from './Landing.js'
import './App.css';

class Container extends Component {
  render() {
    return (
      <div>
      <Row>
      <Navbar brand='logo' right>
      	<NavItem href='#!'>Build a Drone</NavItem>
      	<NavItem href='#!'>
      		Gallery
      	</NavItem>
      	<NavItem href='#!'>Login</NavItem>
      </Navbar>
    </Row>
    <Row>
      <Landing />
    </Row>
  </div>
    );
  }
}

export default Container;
