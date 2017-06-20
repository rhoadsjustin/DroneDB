import React, { Component } from 'react';
import {Row, Navbar, NavItem} from 'react-materialize';
import {Link} from 'react-router-dom';






class NavbarComp extends Component {
render() {
  return (
      <div>
        <Row>
          <Navbar className='navbar' brand='logo' right><Link to={'/'}></Link>
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
