import React, { Component } from 'react';
import {Col, Preloader,Chip, Button, Modal} from 'react-materialize';
import background from './profilebckgrnd.jpg';

class Profile extends Component {
  render(){
    return (
      <div>
        <h1>Profile coming soon</h1>
        <Col s={4}>
      		<Preloader size='big'/>
      	</Col>

    <Modal
	header='Modal Header'
	trigger={
		<Button waves='light'>MODAL</Button>
	}>
      <Chip>
  			<img src={background} alt='Contact Person' />
  			John Doe
  		</Chip>
</Modal>
      </div>
    )
  }
}

export default Profile
