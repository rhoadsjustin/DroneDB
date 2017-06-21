import React, { Component } from 'react';
import { Col, Card, CardTitle, Collapsible} from 'react-materialize';
import DroneComp from './DroneComp.js'
import drone3 from './drone3.png';

class DroneCard extends Component {

  render() {
    let partsListNodes = this.props.currentDrone.map(chosenPart => {
      return (
        <DroneComp
          ChosenPartName={chosenPart.name}
          ChosenPartPrice={chosenPart.price}
          ChosenPartLink={chosenPart.link}
          ChosenPartUniqueID={chosenPart['_id']}
          currentPart={this.props.currentPart}>
          </DroneComp>
      )
    })
    return (
        <Col s={6} m={10} l={6}>
          <Card header={<CardTitle reveal image={drone3}/>}
            reveal={<div>
                  <h5>Your Drone Being Built!</h5>
                  <Collapsible>
                    { partsListNodes }
                  </Collapsible>
                      <a key="magic" href='https://www.google.com'>Click to Buy</a>
                    </div>}>
          </Card>
        </Col>

    )
  }

}

export default DroneCard
