import React, { Component } from 'react';
import {CollapsibleItem} from 'react-materialize';
import './App.css';

class GalleryCard extends Component {
  render() {
    return (
      <div>
      <CollapsibleItem header={this.props.droneFrame}>
        <p>
          <a href={this.props.droneFrameLink}>
          Click here to buy
          </a>
        </p>
      </CollapsibleItem>
      <CollapsibleItem header={this.props.droneESC}>
        <p>
          <a href={this.props.droneESCLink}>
          Click here to buy
          </a>
        </p>
      </CollapsibleItem>
      <CollapsibleItem header={this.props.droneMotor}>
        <p>
          <a href={this.props.droneMotorLink}>
          Click here to buy
          </a>
        </p>
      </CollapsibleItem>
      </div>
    )
    }
}

export default GalleryCard
