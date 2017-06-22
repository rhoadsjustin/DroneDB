import React, { Component } from 'react';
import {CollapsibleItem, Button} from 'react-materialize';

class PartComp extends Component {
  constructor(props) {
    super(props);
    this.addParttoDrone = this.props.addParttoDrone.bind(this);
  }

  render() {
    return(
      <CollapsibleItem header={this.props.name} icon='build'>
        <p>${this.props.price}</p>
        <a className='part-link' href={this.props.link}>Go to Part</a>
        <p className='right'>Add to my Drone</p>
        <Button floating className='right' waves='light' icon='add' onClick={e => this.addParttoDrone(e, this.props.addID, this.props.name, this.props.price, this.props.link, this.props.category)}></Button>
      </CollapsibleItem>
    )
  }
}

export default PartComp;
