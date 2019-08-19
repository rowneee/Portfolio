import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Image, Col } from 'react-bootstrap'

class NavDirectory extends React.Component {

  render() {
    console.log("Da Navbar");
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <Col xs={6} md={4}>
            <Image src="https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg" roundedCircle style={{width:"100px", height:"80px"}} />
          </Col>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Music</Nav.Link>
            <Nav.Link href="#pricing">About Me</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Merch</Nav.Link>
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
