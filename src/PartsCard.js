import React, { Component } from 'react';
import {Col,Row, Collapsible, CollapsibleItem} from 'react-materialize';
import './App.css';
import DroneDBModel from './models/DroneDB';


class Partscard extends Component {
  constructor(){
    super()
    this.state = ({
      part: {
        name: '',
        link: '',
        price: '',
        category: ''
      }

    })
  }
  fetchData(){
    DroneDBModel.all().then( (res) => {
      this.setState ({

      })
    })
  }
  componentDidMount(){
    this.fetchData()
  }
  render() {
    return (
      <Row>
        <Col s={6} m={10} l={6}>
            <h5>Here are the available parts</h5>
            <Collapsible popout>
            	<CollapsibleItem header='Part 1' icon='build'>
                This is the item's description, price, link
            	</CollapsibleItem>
            	<CollapsibleItem header='Part 2' icon='build'>
                This is the item's description, price, link
            	</CollapsibleItem>
            	<CollapsibleItem header='Part 3' icon='build'>
            		This is the item's description, price, link
            	</CollapsibleItem>
            </Collapsible>
        </Col>
        </Row>
    )
  }

}

export default Partscard
