import React from "react";
import NavbarComp from "./MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import BookList from "./BookList";

function MyHeader() {
  return (
    <Container>
      <NavbarComp />
    </Container>
  );
}

export default MyHeader;
