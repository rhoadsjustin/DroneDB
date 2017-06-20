import React, { Component } from 'react';
import {Footer as Footy} from 'react-materialize';
import './App.css';


class Footer extends Component {
  render() {
    return (
      <Footy className='left-align' copyrights="©2017 Copyright Text | Check out our project on GitHub"></Footy>
    )
  }
}

export default Footer;
