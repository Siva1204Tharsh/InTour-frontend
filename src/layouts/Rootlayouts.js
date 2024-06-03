import React from "react";
import AppBar from "../components/AppBar";

import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const Rootlayouts = () => {
  return (
    <>
      <AppBar />
      <Container fluid>
        <Outlet />
      </Container>
      
    </>
  );
};

export default Rootlayouts;
