import React, { Component } from 'react';
import {Slider, Slide, Button, Icon, Row} from 'react-materialize';
import {Link} from 'react-router-dom';
import './App.css';
import slider1 from './drone1.gif';



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
            		src="http://lorempixel.com/580/250/nature/2"
            		title="Click Below"
            		placement="left">
            		to start building!
            	</Slide>
            	<Slide
            		src="http://lorempixel.com/580/250/nature/3"
            		title="We will find a use for this"
            		placement="right">
            		eventually.
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
