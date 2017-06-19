import React, { Component } from 'react';
import {Col, Card, CardTitle, Button, Icon, Collection, CollectionItem} from 'react-materialize'

class Partscard extends Component {
  render() {
    return (
        <Col s={6} m={10} l={6}>
          <Card className='small'
          	header={<CardTitle>Choose your Parts Here</CardTitle>}>


            Here are the available parts
            <Collection>
            	<CollectionItem href='#'>Frame 1</CollectionItem>
            	<CollectionItem href='#' active>Frame 2</CollectionItem>
            	<CollectionItem href='#'>Frame 3</CollectionItem>
            </Collection>
          </Card>
        </Col>
    )
  }

}

export default Partscard
