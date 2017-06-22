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
    this.finishDrone = this.props.finishDrone.bind(this);
  }

  // componenteWillReceiveProps(nextProps) {
  //   console.log("Current Parts: ", this.props.currentPart);
  //   if(this.props.currentPart !== nextProps.currentPart) {
  //     this.iteratePartsForward(nextProps.currentPart)
  //   } else {
  //     this.iteratePartsBackward(nextProps.currentPart)
  //   }
  // }
  render() {
    console.log(this.props.parts)
    let partNodes = this.props.parts.map(part => {
      return (
        <PartComp
          uniqueID={ part['_id'] }
          name={ part.name }
          price={ part.price }
          key={ part['_id']}
          link={ part.link }
          category={ part.category }
          addID={ part['_id']}
          addParttoDrone={ this.addParttoDrone }>
          </PartComp>
      )
    })
    console.log("COUNTER: ", this.props.counter)
    let button = null;
if(this.props.counter === 9){
  button = <Button onClick={ this.finishDrone }>Submit</Button>
} else {
  button = <Button onClick={ this.iteratePartsForward }>Next</Button>
}
    return (
      <Row>
        <Col s={6} m={10} l={6}>
            <h5 className="part-header">Choose from the available {this.props.currentPart}s.</h5>
            <Collapsible popout>
            	{ partNodes }
            </Collapsible>
            <div className='center'>
            <Button onClick={ this.iteratePartsBackward }>Previous</Button>{'  '}
            { button }
          </div>
        </Col>
        </Row>
    )
  }

}

export default Partscard;
