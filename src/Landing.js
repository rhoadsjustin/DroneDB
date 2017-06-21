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
          <Slider className="slider">
            	<Slide
                className="slide-one"
            		src={slider1}
                placement="left">
            		<h3>Welcome to Drone DB</h3><br/><br/><h5>Let us help you build your first racing drone.</h5>
            	</Slide>
            	<Slide
                className="slide-two"
            		src={slider2}
            		placement="right"><h3>Click Below</h3><br/><br/><h5>We'll walk you through the rest.</h5>
            	</Slide>
            	<Slide
                className="slide-three"
            		src={slider3}
            		placement="left"><h3>Easy Customization</h3><br/><br/><h5>Make it your own.</h5>
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
