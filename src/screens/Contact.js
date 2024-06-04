import React from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";

const Contact = () => {
  return (
    <div className="bg-light">
    <Container className="pt-3">
      <Row className="align-items-center">
        <Col lg={6}>
          <Form>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <i class="bi bi-envelope-paper-fill"></i>
              </InputGroup.Text>
              <FloatingLabel controlId="floatingInput" label="Email">
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">
                <i class="bi bi-person-fill"></i>
              </InputGroup.Text>
              <FloatingLabel controlId="floatingInput" label="Name">
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
            </InputGroup>

            <InputGroup className="mb-3">
              <FloatingLabel
                controlId="floatingTextarea"
                label="Comments"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                />
              </FloatingLabel>
            </InputGroup>
            <Button variant="primary" type="submit" className="mb-3">
              Submit
            </Button>
          </Form>
        </Col>
        <Col lg={6}>
          <div className="mt-3">
            <p className="fw-bold mb-4">Anim pariatur cliche reprehenderit?</p>
            <p className="text-gray-500 mb-12">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
              autem numquam dolore molestias aperiam culpa alias veritatis
              architecto eos, molestiae vitae ex eligendi libero eveniet
              dolorem, doloremque rem aliquid perferendis.
            </p>

            <p className="fw-bold mb-4">
              Non cupidatat skateboard dolor brunch?
            </p>
            <p className="text-gray-500 mb-12">
              Distinctio corporis, iure facere ducimus quos consectetur ipsa ut
              magnam autem doloremque ex! Id, sequi. Voluptatum magnam sed fugit
              iusto minus et suscipit? Minima sunt at nulla tenetur, numquam
              unde quod modi magnam ab deserunt ipsam sint aliquid dolores
              libero repellendus cupiditate mollitia quidem dolorem odit
            </p>

            <p className="fw-bold mb-4">
              Praesentium voluptatibus temporibus consequatur non aspernatur?
            </p>
            <p className=" mb-12">
              Minima sunt at nulla tenetur, numquam unde quod modi magnam ab
              deserunt ipsam sint aliquid dolores libero repellendus cupiditate
              mollitia quidem dolorem.
            </p>
            <div className="mt-3"></div>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Contact;
