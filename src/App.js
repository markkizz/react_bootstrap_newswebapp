import React, { Component } from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/Navbar/Navbar";
import NavLink from "./components/NavLink/NavLink";
export class App extends Component {
  render() {
    return (
      <>
        <Container>
          <NavBar />
          <NavLink />
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
