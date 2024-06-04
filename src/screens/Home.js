import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
const Home = () => {
  return (
    <div className="bg-light">
    <Container fluid className="pt-3">
      <Row className="justify-content-center align-items">
        <Col lg={8}>
          <Carousel>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src={require("../assets/banner01.jpg")}
                alt="First slide"
                rounded
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100 "
                src={require("../assets/banner02.jpg")}
                alt="Second slide"
                rounded
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100 "
                src={require("../assets/banner03.jpg")}
                alt="Third slide"
                rounded
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src={require("../assets/banner04.jpg")}
                alt="Third slide"
                rounded
              />
              <Carousel.Caption>
                <h3>Fouth slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <div className="text-center">
        <h2 className="display-5 mt-3">Tourism for beautiful places</h2>
        <p className="lead text-muted">
          Lorem ipsum dolorlaudantium, nam impedit!
        </p>
      </div>
    </Container>
    </div>
  );
};

export default Home;
