import React from 'react'
import { Navbar, Nav, NavDropdown }from 'react-bootstrap'

class NavDirectory extends React.Component {

  render() {
    console.log("Da Navbar");
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Projects</Nav.Link>
            <Nav.Link href="#pricing">About Me</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="#deets">Other shit</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    )
  }
}

export default NavDirectory
