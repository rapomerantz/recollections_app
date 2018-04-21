import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

export default class CustomNavbar extends Component {
  render() {
    return (

        <Navbar default collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Home</Link>
                </Navbar.Brand>
                <Navbar.toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} componentClass={Link} to="/">
                        View Reflections
                    </NavItem>
                    <NavItem eventKey={2} componentClass={Link} to="/add">
                        Add a New Reflection
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
  }
}
