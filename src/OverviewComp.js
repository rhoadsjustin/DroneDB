import React, { Component } from 'react';
import {CollapsibleItem} from 'react-materialize';
import './App.css';

class OverviewComp extends Component {
  render() {
    return(
        <CollapsibleItem header={<b>{this.props.dronePartCategory}</b>}>
        {this.props.dronePartName}
        <p>
          <a href={this.props.dronePartLink}>
          Click here to buy
          </a>
        </p>
        </CollapsibleItem>


    )
  }
}

export default OverviewComp
