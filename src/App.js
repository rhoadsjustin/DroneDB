import React, { Component } from 'react';
import {Row, Navbar, NavItem, Footer} from 'react-materialize';
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
    <Footer copyrights="&copy 2015 Copyright Text"
      	links={
      		<ul>
      			<li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
      			<li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
      			<li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
      			<li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
      		</ul>
      	}
	      className='example'>
		<h5 className="white-text">Thanks for Building</h5>
		<p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
</Footer>;
  </div>
    );
  }
}

export default Container;
