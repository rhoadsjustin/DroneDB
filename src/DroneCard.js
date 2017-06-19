import React, { Component } from 'react';
import { Col, Card, CardTitle} from 'react-materialize'

class DroneCard extends Component {
  render() {
    return (
        <Col s={6} m={10} l={6}>
          <Card className='large'
          	header={<CardTitle reveal image='https://static1.squarespace.com/static/543f600be4b0c9fc7fdf723f/574e89baa3360cb58d9cda6d/574e8a122b8dde5e3e9c1c58/1464764951123/Frame+Glamour.jpg?format=1000w'/>}
          	actions={[<a href='https://www.google.com'>Click to Buy</a>]}>
          </Card>
        </Col>

    )
  }

}

export default DroneCard
