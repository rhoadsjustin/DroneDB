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
          ChosenPartCategory={chosenPart.category}
          ChosenPartUniqueID={chosenPart['_id']}>
          </DroneComp>
      )
    })
    return (
        <Col s={6} m={10} l={6}>
          <Card header={<CardTitle reveal image={drone3} waves="light" />}
            title="Flip card for reverse side."
            reveal={<div>
                  <hr/>
                  <p>Your Current Drone:</p>
                  <Collapsible>
                    { partsListNodes }
                  </Collapsible>
                    </div>}>
          </Card>
        </Col>

    )
  }

}

export default DroneCard
