import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FormGroup, Input, Col as Colstrap, Label } from "reactstrap";

export default function ContactForm() {
  return (
    <div>
      <Container className="mt-3">
        <Row>
          <Col>
            <p className="new-account-title">Contact</p>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <label className="firstname">
              Email Address <span className="required">*</span>
            </label>
            <Form.Control placeholder="Email Address" />
          </Col>
          <Col>
            <Row>
              <Col>
                <label className="firstname">
                  Date of birth <span className="required">*</span>
                </label>
                <FormGroup row>
                  <Colstrap>
                    <Input type="select" name="select" id="exampleSelect">
                      <option>DD</option>
                      <option>1</option>
                      <option>2</option>
                    </Input>
                  </Colstrap>
                </FormGroup>
              </Col>
              <Col>
                <label className="firstname">
                  Month <span className="required">*</span>
                </label>
                <FormGroup>
                  <Input
                    type="month"
                    name="date"
                    id="exampleDate"
                    placeholder="MM"
                  />
                </FormGroup>
              </Col>
              <Col>
                <label className="firstname">
                  Year <span className="required">*</span>
                </label>
                <Form.Control placeholder="YYYY" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
