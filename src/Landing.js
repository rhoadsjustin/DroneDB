import React, { Component } from 'react';
import {Slider, Slide, Button, Icon, Row} from 'react-materialize';
import {Link} from 'react-router-dom';
import './App.css';
import slider1 from './drone1.gif';
import slider2 from './drone2.jpg';
import slider3 from './drone3.jpg';



class Landing extends Component {
  render() {
    return (
      <div>
        <Row>
          <Slider>
            	<Slide
            		src={slider1}
            		title="Welcome to Drone DB">
            		Let us help you build your first racing drone!
            	</Slide>
            	<Slide
            		src={slider2}
            		title="Click Below"
            		placement="left">
            	</Slide>
            	<Slide
            		src={slider3}
            		placement="right">
            	</Slide>
          </Slider>
        </Row>
        <Row className='center'>
          <Link to={'/build'}>
            <Button className='button' large waves='light'>Start Your Drone Build<Icon left className='icon'>build</Icon></Button>
          </Link>
        </Row>
      </div>
    )
  }
}

export default Landing;
