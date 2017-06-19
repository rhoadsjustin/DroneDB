import React, { Component } from 'react';
import {Col, Card, CardTitle, Button, Icon, Collection, CollectionItem} from 'react-materialize'

class Partscard extends Component {
  render() {
    return (
        <Col s={6} m={10} l={6}>
          <Card className='large'
          	header={<CardTitle>Choose your Parts Here</CardTitle>}>
            <h5>Here are the available parts</h5>
            <Collection>
            	<CollectionItem href='#'>Frame 1</CollectionItem>
            	<CollectionItem href='#'>Frame 2</CollectionItem>
            	<CollectionItem href='#'>Frame 3</CollectionItem>
            </Collection>
          </Card>
        </Col>
    )
  }

}

export default Partscard
