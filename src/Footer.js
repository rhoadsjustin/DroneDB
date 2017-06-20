import React, { Component } from 'react';
import {Footer as Footy, Row} from 'react-materialize';
import './App.css'

class Footer extends Component {
  render() {
    return (
      <Row className='footer'>
      <Footy copyrights="&copy 2015 Copyright Text"
        links={
          <ul>
            <li><a className="grey-text text-lighten-3" href="/">Home</a></li>
            <li><a className="grey-text text-lighten-3" href="/build">Build</a></li>
            <li><a className="grey-text text-lighten-3" href="/gallery">Gallery</a></li>
            <li><a className="grey-text text-lighten-3" href="/profile">Profile</a></li>
          </ul>
        }
        >
        <h5 className="white-text">Thanks for Building</h5>
        <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
      </Footy>
    </Row>
    )
  }
}

export default Footer;
