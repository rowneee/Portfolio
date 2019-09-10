import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Image, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class NavDirectory extends React.Component {



  render() {
    console.log("Navbar");
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">
          <Col xs={6} md={4}>
            <Image src={require("/Users/ronishabo/Flatiron/Portfolio/portfolio-frontend/src/images/rslogo.png")} roundedCircle style={{width:"100px", height:"60px", width:"60px"}} />
          </Col>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#projects">
              <p class="nav-buttons">
                Projects
              </p>
            </Nav.Link>
            <Nav.Link href="#about">
              <p class="nav-buttons">
                About Me
              </p>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#tbd">
              <p class="nav-buttons">
                Click Me
              </p>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#other">
              <p class="nav-buttons">
                Other
              </p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavDirectory
