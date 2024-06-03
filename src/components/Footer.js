import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className=" bg-success-subtle ">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h4>InTournetExplorer</h4>
            <div className="p-3 text-center">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maxime, neque accusamus culpa dolorum consectetur iure inventore
              </p>
              <div>
                <i class="bi bi-whatsapp me-3"></i>
                <i class="bi bi-facebook me-3"></i>
                <i class="bi bi-twitter me-3"></i>
                <i class="bi bi-instagram me-3"></i>
                <i class="bi bi-youtube me-3"></i>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <h4>About</h4>
            <p>Hoooo</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
