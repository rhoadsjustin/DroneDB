import React, { Component } from 'react';
import {Row} from 'react-materialize';
import OverviewCard from './OverviewCard.js';

class Gallery extends Component {
  render() {
    return (
        <Row className="center">
          <OverviewCard />
        </Row>
    )
  }
}

export default Gallery;
