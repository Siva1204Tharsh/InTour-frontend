import React from "react";
import { Button, Container } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const Login = () => {
  return (
    <div className="bg-light">
      <Container className="align-items-center p-5 " lg={6} md={8} sm={10}>
        <h2 className="text-center fw-bold h1 py-3">LOGIN</h2>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <Button type="submit" className="my-3 btn btn-primary">
          Sign In
        </Button>
      </Container>
    </div>
  );
};

export default Login;
