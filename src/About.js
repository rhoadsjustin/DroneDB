import React, { Component } from 'react';
import {Slider, Slide, Row, Button, MediaBox} from 'react-materialize';
import {Link} from 'react-router-dom';
import Jared from './imgs/drJar.png'
import benjamin from './imgs/drBen.png'
import Dane from './imgs/drdane.png'
import Justin from './imgs/drJust.png'




class About extends Component {
  render() {
    return (
      <div>
        <Row>
          <Slider>
            <Slide
              src={Jared}
              title="This is Jared!"
              placement="right">
              He's a lead developer on our DroneDB.
            </Slide>
            <Slide
              src={benjamin}
              title="This is Benjamin!"
              placement="left">
              He's another lead developer on our DroneDB.
            </Slide>
            <Slide
              src={Dane}
              title="Hello, this is Dane"
              placement="right">
              He's another lead developer on our DroneDB.
            </Slide>
            <Slide
              src={Justin}
              title="This is Justin!"
              placement="left">
              He's another lead developer on our DroneDB.
            </Slide>
          </Slider>
        </Row>
        <Row className="center">
          <h3>Thanks for building drones with us. Let's hit the skies!</h3>
          <Link to={'/'}><Button>Back to Home Page</Button></Link>
        </Row>
      </div>
    )
  }
}

export default About
