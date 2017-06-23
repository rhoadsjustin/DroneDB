import React, { Component } from 'react';
import { Col, Card, CardTitle, Row, Chip, Button, Collapsible} from 'react-materialize';
import {Link} from 'react-router-dom';
import './App.css';
import slider2 from './imgs/DroneCard.png';
import OverviewComp from './OverviewComp.js';

class OverviewCard extends Component {

  render() {
    let droneNodes = this.props.currentDroneVisualList.map(dronePart => {
      return (
        <OverviewComp
          dronePartName={dronePart.name}
          dronePartPrice={dronePart.price}
          dronePartLink={dronePart.link}
          dronePartCategory={dronePart.category}
          dronePartUniqueID={dronePart['_id']}>
        </OverviewComp>
      )
    })
    return (
        <Row className='center'>
          <Col s={6} m={10} l={6}>
            <Card header={<CardTitle reveal image={slider2} waves='light'/>}
              title="Your New Drone!"
              reveal={
                <Collapsible>
                  {droneNodes}
                </Collapsible>}>
                  <p>
                    <Chip>
                      <img src={slider2} alt='Contact Person' />
                        Drone Creator
                      </Chip>
                  </p>
            </Card>
          </Col>
          <Col s={6} m={10} l={6}>
            <blockquote>
              It is better to create than to learn! Creating is the essence life. -Julius Caesar
            </blockquote>
            <Link to={'/gallery'}>
            <Button large icon='art track' onClick={'/gallery'}>Check out other drones here</Button>
            </Link>
          </Col>
        </Row>

    )
  }

}

export default OverviewCard
