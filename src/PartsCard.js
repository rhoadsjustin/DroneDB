import React, { Component } from 'react';
import {Col,Row, Collapsible} from 'react-materialize';
import PartComp from './PartComp.js';
import './App.css';


class Partscard extends Component {
  render() {
    let frameNodes = this.props.frames.map(frame => {
      return (
        <PartComp
          name={ frame.name }
          price={ frame.price }
          key={ frame['_id']}
          link={ frame.link }>
          </PartComp>
      )
    })
    return (
      <Row>
        <Col s={6} m={10} l={6}>
            <h5>Here are the available frames</h5>
            <Collapsible popout>
            	{ frameNodes }
            </Collapsible>
        </Col>
        </Row>
    )
  }

}

export default Partscard;
