import React, { Component } from 'react';
import {CollapsibleItem} from 'react-materialize';

class PartComp extends Component {
  render() {
    return(
      <CollapsibleItem header={this.props.name} icon='build'>
        <p>${this.props.price}</p>
        <a href={this.props.link}>Go to Part</a>
      </CollapsibleItem>
    )
  }
}

export default PartComp;
