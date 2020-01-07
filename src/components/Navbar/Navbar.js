import React from "react";
import { Row, Col, Navbar } from "react-bootstrap";
import moment from "moment";

export default function NavBar() {
  return (
    <Navbar className="NavBar_bg_nav">
      <Row className="justify-between">
        <Col>{moment().format("LL")}</Col>
        <Col style={{ textAlign: "center" }}>
          <h1 style={{ marginBottom: 0 }}>Newsweek</h1>
        </Col>
        <Col>
          <Row>
            <Col xs={8} style={{ textAlign: "right" }}>
              SIGN IN
            </Col>
            <Col xs={4}>SUBSCRIBE</Col>
          </Row>
        </Col>
      </Row>
    </Navbar>
  );
}
