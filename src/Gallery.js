import React, { Component } from 'react';
import {Row, Card, Col, Collapsible, Chip, CardTitle} from 'react-materialize';
import slider2 from './drone2.jpeg'
import GalleryCard from './GalleryCard.js'

class Gallery extends Component {
  render() {
    console.log(this.props.allDrones);
    // let allDronesNodes = this.props.allDrones.map(drones => {
    //   let mappedDrones = drones
    // }).forEach(function(mappedDrones){
    //   return(
    //   <GalleryCard
    //     droneID={drone['id']}
    //     droneFrame={drone.frame.name}
    //     droneFrameLink={drone.frame.link}
    //     droneESC={drone.electronicSpeedController.name}
    //     droneESCLink={drone.electronicSpeedController.link}
    //     droneMotor={drone.motor.name}
    //     droneMotorLink={drone.motor.link}
    //     droneFC={drone.flightController.name}
    //     droneFCLink={drone.flightController.link}
    //     droneProp={drone.propeller.name}
    //     dronePropLink={drone.propeller.link}
    //     droneVT={drone.videoTransmitter.name}
    //     droneVTLink={drone.videoTransmitter.link}
    //     droneCamera={drone.camera.name}
    //     droneCameraLink={drone.camera.link}
    //     droneGoggles={drone.goggle.name}
    //     droneGogglesLink={drone.goggle.link}
    //     droneTransmitter={drone.transmitter.name}
    //     droneTransmitterLink={drone.transmitter.link}>
    //     </GalleryCard>
    //   )
    // })
    return (
      <div>
          <Row>
            <Col s={6} m={10} l={6}>
              <Card header={<CardTitle reveal image={slider2} waves='light'/>}
                title="Drone!"
                reveal={
                  <Collapsible>
                    {allDronesNodes}
                  </Collapsible>}>
                    <p>
                      <Chip>
                        <img src={slider2} alt='Contact Person' />
                          Drone Creator
                        </Chip>
                    </p>
              </Card>
            </Col>          </Row>
      </div>
    )
  }
}

export default Gallery;
