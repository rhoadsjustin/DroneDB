import React, { Component } from 'react';
import {CollapsibleItem} from 'react-materialize';
import './App.css';

class DroneComp extends Component {
  render() {
    return(
        <CollapsibleItem header={this.props.ChosenPartCategory} icon='done'>
          <p>Part Name: {this.props.ChosenPartName}</p>
          <p>Part Price:${this.props.ChosenPartPrice}</p>
          <a href={this.props.ChosenPartLink}>Link to Part</a>
        </CollapsibleItem>
    )
  }
}

export default DroneComp
