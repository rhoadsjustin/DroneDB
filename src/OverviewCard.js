import React, { Component } from 'react';
import { Col, Card, CardTitle, Row} from 'react-materialize'
import './App.css';

class OverviewCard extends Component {
  render() {
    return (
        <Row className='center'>
          <Col s={6} m={6} l={6}>
            <Card className='large'
            	header={<CardTitle reveal image='https://static1.squarespace.com/static/543f600be4b0c9fc7fdf723f/574e89baa3360cb58d9cda6d/574e8a122b8dde5e3e9c1c58/1464764951123/Frame+Glamour.jpg?format=1000w'/>}
            	actions={[<a href='https://www.google.com'>Click to Buy</a>]}>
              <ul>
                <li><b>Frame:</b> Zippy 220</li>
                <li><b>ESC:</b> EMAX EMX-SC-1775 Bullet Series 35A ESC(BLHELI_S)</li>
              Motor: EMAX RS2205/ 2300Kv RaceSpec Motor (CCW)
              </ul>
            </Card>
            <Card className='large'
            	header={<CardTitle reveal image='https://static1.squarespace.com/static/543f600be4b0c9fc7fdf723f/574e89baa3360cb58d9cda6d/574e8a122b8dde5e3e9c1c58/1464764951123/Frame+Glamour.jpg?format=1000w'/>}
            	actions={[<a href='https://www.google.com'>Click to Buy</a>]}>
              <ul>
                <li><b>Frame:</b> Zippy 220</li>
                <li><b>ESC:</b> EMAX EMX-SC-1775 Bullet Series 35A ESC(BLHELI_S)</li>
              Motor: EMAX RS2205/ 2300Kv RaceSpec Motor (CCW)
              </ul>
            </Card>
          </Col>
        </Row>

    )
  }

}

export default OverviewCard
