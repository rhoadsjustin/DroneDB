import React, { Component } from 'react';
import {Col,Row, Collapsible, Button} from 'react-materialize';
import PartComp from './PartComp.js';
import './App.css';


class Partscard extends Component {
  constructor(props) {
    super(props);
    this.iterateParts = this.props.iterateParts.bind(this);
  }

  componenteWillReceiveProps(nextProps) {
    console.log("Current Parts: ", this.props.currentPart);
    if(this.props.currentPart !== nextProps.currentPart) {
      this.iterateParts(nextProps.currentPart)
    }
  }
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
    console.log(this.props);
    return (
      <Row>
        <Col s={6} m={10} l={6}>
            <h5>Here are the available {this.props.currentPart}s  </h5>
            <Collapsible popout>
            	{ partNodes }
            </Collapsible>
            <div className='center'>
            <Button onClick={ this.iterateParts }>Next</Button>
            <Button>Previous</Button>
            </div>
        </Col>
        </Row>
    )
  }

}

export default Partscard;
