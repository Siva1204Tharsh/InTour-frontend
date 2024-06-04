import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const AppBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container>
        <Navbar.Brand href="/">InTourNetE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto px-5">
            <Nav.Link href="/" className="fw-bold px-3">
              Home
            </Nav.Link>
            <NavDropdown
              title="Reservations"
              id="basic-nav-dropdown"
              className="fw-bold px-3"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="contact" className="fw-bold px-3">
              Contact us
            </Nav.Link>
          </Nav>
          <div className="d-flex px-3">
            <Button variant="outline-primary" className="me-2 fw-bold" href="login">
              Sign in
            </Button>
            <Button variant="outline-info" className="fw-bold" href="register">
              Sign up
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppBar;
