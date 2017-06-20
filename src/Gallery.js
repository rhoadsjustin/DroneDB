import React, { Component } from 'react';
import {Row} from 'react-materialize';
import OverviewCard from './OverviewCard.js';

class Gallery extends Component {
  render() {
    return (
      <Row>
        <OverviewCard />
      </Row>
    )
  }
}

export default Gallery;
