import React from "react";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";

import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

const Rootlayouts = () => {
  return (
    <>
      <AppBar />
      <Container fluid>
        <Outlet />
      </Container>
      <Footer />
      
    </>
  );
};

export default Rootlayouts;
