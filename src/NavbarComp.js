import React, { Component } from 'react';
import {Row, Navbar, NavItem, Icon} from 'react-materialize';
import {Link} from 'react-router-dom';
import Brandlogo from './drone-logo2.png';





class NavbarComp extends Component {



render() {
  return (
      <div>
        <Row>
          <Navbar className='navbar' brand={<div><img src={Brandlogo} width='150' height='auto'></img></div>} href='/' right>
            <NavItem><Link to={'/build'}>Build a Drone</Link></NavItem>
            <NavItem><Link to={'/gallery'}>Gallery</Link></NavItem>
            <NavItem>{ !this.props.currentUser ?
              <NavItem><Link to='#' onClick={event => this.props.loginButtonClicked(event)}>Login</Link></NavItem> :
              <NavItem><Link to='#' onClick={event => this.props.logoutButtonClicked(event)}>Logout</Link></NavItem>}
            </NavItem>
            <NavItem>
              {this.props.currentUser != null ?
                <h5>What up {this.props.currentUser.displayName}! </h5>
              : <h5>What up dude or dudette!</h5>}
            </NavItem>
          </Navbar>
        </Row>

      </div>
    )
  }
}
export default NavbarComp
