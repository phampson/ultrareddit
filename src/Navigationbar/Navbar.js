import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';

class Navbar extends Component {
  render() {
    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Super_Redit</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem>
            Henlo
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
