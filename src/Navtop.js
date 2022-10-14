

import React, {Component} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class Top extends Component {
  render(){
    return(
      <div>
           <Navbar bg="dark text-light p-3 h4" variant="dark" expand="lg">
              <Container>
                <Navbar.Brand href="#home">myBlog</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#services">Services</Nav.Link>
                    <Nav.Link href="#blog">Blog</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
      </div>
    )
  }
}

export default Top;