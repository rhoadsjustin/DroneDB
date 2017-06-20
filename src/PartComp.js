import React, { Component } from 'react';
import {CollapsibleItem} from 'react-materialize';

class PartComp extends Component {
  render() {
    return(
      <CollapsibleItem header={this.props.frame.name} icon='build'>
        <p>{this.props.frame.price}</p>
        <a href={this.props.frame.link}>Go to Part</a>
      </CollapsibleItem>
    )
  }
}

export default PartComp;
