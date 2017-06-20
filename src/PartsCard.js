import React, { Component } from 'react';
import {Col,Row, Collapsible} from 'react-materialize';
import PartComp from './PartComp.js';
import './App.css';


class Partscard extends Component {
  render() {
    let partNodes = this.props.parts.map(part => {
      return (
        <PartComp
          name={ part.name }
          price={ part.price }
          key={ part['_id']}
          link={ part.link }>
          </PartComp>
      )
    })
    return (
      <Row>
        <Col s={6} m={10} l={6}>
            <h5>Here are the available frames</h5>
            <Collapsible popout>
            	{ partNodes }
            </Collapsible>
        </Col>
        </Row>
    )
  }

}

export default Partscard;
