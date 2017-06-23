import React, { Component } from 'react';
import {Card, Col, Collapsible, CollapsibleItem, Chip, CardTitle} from 'react-materialize';
import slider2 from './imgs/DroneCard.png'
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

                    <a href={this.props.droneFrameLink}><p>Part: {this.props.droneFrame}</p></a>

                  </CollapsibleItem>
                  <CollapsibleItem header='Electronic Speed Controller'>
                    <a href={this.props.droneESCLink}><p>Part: {this.props.droneESC}</p></a>

                  </CollapsibleItem>
                  <CollapsibleItem header='Motor'>

                    <a href={this.props.droneMotorLink}><p>Part: {this.props.droneMotor}</p></a>

                  </CollapsibleItem>
                  <CollapsibleItem header='Flight Controller'>
                    <a href={this.props.droneFCLink}><p>Part: {this.props.droneFC}</p></a>

                  </CollapsibleItem>
                  <CollapsibleItem header='Propeller'>

                    <a href={this.props.dronePropLink}><p>Part: {this.props.droneProp}</p></a>

                  </CollapsibleItem>
                  <CollapsibleItem header='Video Transmitter'>

                    <a href={this.props.droneVTLink}><p>Part: {this.props.droneVT}</p></a>

                  </CollapsibleItem>
                  <CollapsibleItem header='Camera'>

                    <a href={this.props.droneCameraLink}><p>Part: {this.props.droneCamera}</p></a>

                  </CollapsibleItem>
                  <CollapsibleItem header='Goggle'>

                    <a href={this.props.droneGogglesLink}><p>Part: {this.props.droneGoggles}</p></a>

                  </CollapsibleItem>
                  <CollapsibleItem header='Transmitter'>

                    <a href={this.props.droneTransmitterLink}><p>Part: {this.props.droneTransmitter}</p></a>

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
