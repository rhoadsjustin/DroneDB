import React, { Component } from 'react';
import {Row} from 'react-materialize';
import GalleryCard from './GalleryCard.js'

class Gallery extends Component {
  componentDidMount(){
    let allDronesNodes = this.props.allDrones.map(drone => {
      return(
      <GalleryCard
        key={drone['_id']}
        droneFrame={drone['frame'].name}
        droneFrameLink={drone['frame'].link}
        droneESC={drone['electronicSpeedController'].name}
        droneESCLink={drone['electronicSpeedController'].link}
        droneMotor={drone['motor'].name}
        droneMotorLink={drone['motor'].link}
        droneFC={drone['flightController'].name}
        droneFCLink={drone['flightController'].link}
        droneProp={drone['propeller'].name}
        dronePropLink={drone['propeller'].link}
        droneVT={drone['videoTransmitter'].name}
        droneVTLink={drone['videoTransmitter'].link}
        droneCamera={drone['camera'].name}
        droneCameraLink={drone['camera'].link}
        droneGoggles={drone['goggle'].name}
        droneGogglesLink={drone['goggle'].link}
        droneTransmitter={drone['transmitter'].name}
        droneTransmitterLink={drone['transmitter'].link}>
        </GalleryCard>
      )
    })
  }
  render() {
    console.log(this.props.allDrones);
    return (
      <div>
        <Row>
          {allDronesNodes}
        </Row>
      </div>
    )
  }
}

export default Gallery;
