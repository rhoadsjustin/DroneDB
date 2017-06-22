import React, { Component } from 'react';
import {Row, Card, Col, Collapsible, CollapsibleItem, Chip, CardTitle} from 'react-materialize';
import slider2 from './drone2.jpeg'
import './App.css';

class GalleryCard extends Component {
  render() {
    return (
          <Col s={6} m={10} l={6}>
            <Card header={<CardTitle reveal image={slider2} waves='light'/>}
              title='Drone'
              reveal={
                <Collapsible>
                  <CollapsibleItem header='Frame'>
                    <p>Part: {this.props.droneFrame}</p>
                    <a href={this.props.droneFrameLink}></a>
                  </CollapsibleItem>
                  <CollapsibleItem header='Electronic Speed Controller'>
                    <p>Part: {this.props.droneESC}</p>
                    <a href={this.props.droneESCLink}></a>
                  </CollapsibleItem>
                  <CollapsibleItem header='Motor'>
                    <p>Part: {this.props.droneMotor}</p>
                    <a href={this.props.droneMotorLink}></a>
                  </CollapsibleItem>
                  <CollapsibleItem header='Flight Controller'>
                    <p>Part: {this.props.droneFC}</p>
                    <a href={this.props.droneFCLink}></a>
                  </CollapsibleItem>
                  <CollapsibleItem header='Propeller'>
                    <p>Part: {this.props.droneProp}</p>
                    <a href={this.props.dronePropLink}></a>
                  </CollapsibleItem>
                </Collapsible>
              }>
                  <p>
                    <Chip>
                      <img src={slider2} alt='Contact Person' />
                        Drone Creator
                      </Chip>
                  </p>
            </Card>
          </Col>
    )
    }
}

export default GalleryCard
