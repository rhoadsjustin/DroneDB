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
            <NavItem><Link to={'/login'}>Login</Link></NavItem>
          </Navbar>
        </Row>
      </div>
    )
  }
}
export default NavbarComp
