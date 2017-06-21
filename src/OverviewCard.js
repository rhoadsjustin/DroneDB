import React, { Component } from 'react';
import { Col, Card, CardTitle, Row, Chip} from 'react-materialize'
import './App.css';
import slider2 from './drone2.jpeg';

class OverviewCard extends Component {
  render() {
    return (
        <Row className='center'>
          <Col s={6} m={6} l={6}>
            <Card header={<CardTitle reveal image={"https://static1.squarespace.com/static/543f600be4b0c9fc7fdf723f/574e89baa3360cb58d9cda6d/574e8a122b8dde5e3e9c1c58/1464764951123/Frame+Glamour.jpg?format=1000w"} waves='light'/>}
		          title="Card Title"
		          reveal={
                <ul>
                  <li><b>Frame:</b> Zippy 220</li>
                  <li><b>ESC:</b> EMAX EMX-SC-1775 Bullet Series 35A ESC(BLHELI_S)</li>
                  <li><b>Motor:</b> EMAX RS2205/ 2300Kv RaceSpec Motor (CCW)</li>
                </ul>}>
		          <p>
                <Chip>
            			<img src={slider2} alt='Contact Person' />
            			Jane Doe
            		</Chip></p>
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
