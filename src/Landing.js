import React, { Component } from 'react';
import {Slider, Slide, Button, Icon, Row} from 'react-materialize';
import {Link} from 'react-router-dom';
import './App.css';
import slider1 from './drone1.gif';
import slider2 from './drone2.jpeg';
import slider3 from './drone3.png';



class Landing extends Component {
  render() {
    return (
      <div>
        <Row>
          <Slider>
            	<Slide
                className="slide-one"
            		src={slider1}
            		title="Welcome to Drone DB"
                placement="left">
            		Let us help you build your first racing drone!
            	</Slide>
            	<Slide
                className="slide-two"
            		src={slider2}
            		title="Click Below"
            		placement="right">We'll walk you through the rest.
            	</Slide>
            	<Slide
                className="slide-three"
            		src={slider3}
            		placement="left"><h3>Easy Customization</h3><br/><h5>Make it your own.</h5>
            	</Slide>
          </Slider>
        </Row>
        <Row className='center'>
          <Link to={'/build'}>
            <Button className='button' large waves='light'>Start Your Drone Build<Icon right className='icon'>build</Icon></Button>
          </Link>
        </Row>
      </div>
    )
  }
}

export default Landing;
