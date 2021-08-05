import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import logo from "../logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./topheading.css";

export default function TopHeading() {
  return (
    <div>
      <header>
        <div className="topEdge bg-warning"></div>
        <Container fluid>
          <Row className="header-content-container ">
            <Col xs={10}>
              <img src={logo} className="header-image" />
            </Col>
            <Col xs={2}>
              <Row>
                <Col>
                  <p className="language">
                    Language: English{" "}
                    <span>
                      <i class="fas fa-caret-down"></i>
                    </span>
                    <span>
                      <i class="fas fa-cog gear"></i>
                    </span>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <Container fluid className="bg-warning ">
                <Row>
                  <Col>
                    <p className="warning-text pt-2">
                      You don't have an account yet. please create a new account
                    </p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}
