import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FormGroup, Input, Col as Colstrap, Label } from "reactstrap";

export default function AddressForm() {
  return (
    <div>
      <Container className="mt-3">
        <Row>
          <Col>
            <p className="new-account-title">Address</p>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <label className="firstname">Address</label>
            <Form.Control placeholder="Address" />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <label className="firstname">
              Country/Location <span className="required">*</span>
            </label>
            <FormGroup row>
              <Colstrap>
                <Input type="select" name="select" id="exampleSelect">
                  <option>Select Country/Location</option>
                  <option>1</option>
                  <option>2</option>
                </Input>
              </Colstrap>
            </FormGroup>
          </Col>
          <Col>
            <label className="firstname">
              Province/District <span className="required">*</span>
            </label>
            <FormGroup row>
              <Colstrap>
                <Input type="select" name="select" id="exampleSelect">
                  <option>Province/District</option>
                  <option>1</option>
                  <option>2</option>
                </Input>
              </Colstrap>
            </FormGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
