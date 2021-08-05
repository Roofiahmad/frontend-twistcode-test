import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function FooterComp() {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col>
            <p className="new-account-title">Standart Privacy Note</p>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "justify" }}>
            <p>
              I warrant that the above information is true and correct. I
              understand that failure to answer all questions listed in this
              application form may prevent L'OCCITANE from processing my
              application and L'OCCITANE may refuse to accept this application
              in the right of my individual circumstance{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
