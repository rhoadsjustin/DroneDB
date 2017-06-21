import React, { Component } from 'react';
import {Col,Row, Collapsible, Button} from 'react-materialize';
import PartComp from './PartComp.js';
import './App.css';


class Partscard extends Component {
  constructor(props) {
    super(props);
    this.iteratePartsForward = this.props.iteratePartsForward.bind(this);
    this.iteratePartsBackward = this.props.iteratePartsBackward.bind(this);
    this.addParttoDrone = this.props.addParttoDrone.bind(this);
  }

  componenteWillReceiveProps(nextProps) {
    console.log("Current Parts: ", this.props.currentPart);
    if(this.props.currentPart !== nextProps.currentPart) {
      this.iteratePartsForward(nextProps.currentPart)
    }
  }
  render() {
    let partNodes = this.props.parts.map(part => {
      return (
        <PartComp
          uniqueID={ part['_id'] }
          name={ part.name }
          price={ part.price }
          key={ part['_id']}
          link={ part.link }
          addID={ part['_id']}
          addParttoDrone={ this.addParttoDrone }>
          </PartComp>
      )
    })
    return (
      <Row>
        <Col s={6} m={10} l={6}>
            <h5>Here are the available {this.props.currentPart}s  </h5>
            <Collapsible popout>
            	{ partNodes }
            </Collapsible>
            <div className='center'>
            <Button onClick={ this.iteratePartsBackward }>Previous</Button>{'  '}
            <Button onClick={ this.iteratePartsForward }>Next</Button>
            </div>
        </Col>
        </Row>
    )
  }

}

export default Partscard;
