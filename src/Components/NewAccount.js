import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FormGroup, Label, Input } from "reactstrap";
import "./newAccount.css";

export default function NewAccount() {
  const title = ["Mrs", "Ms", "Mdm", "Mr", "Dr"];
  return (
    <div>
      <Container className="new-account-container">
        <Row>
          <Col>
            <p className="new-account-title">Create New Account</p>
          </Col>
        </Row>
        <Row>
          <Col md={1}>
            <p className="firstname">Title</p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Row>
              {title.map((item) => {
                return (
                  <Col>
                    <FormGroup check inline>
                      <Label check>
                        <Input type="checkbox" /> {item}
                      </Label>
                    </FormGroup>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
        <Row>
          <Form>
            <Row className="mt-3">
              <Col>
                <label className="firstname">
                  First name <span className="required">*</span>
                </label>
                <Form.Control placeholder="First name" />
              </Col>
              <Col>
                <label className="firstname">
                  Last name <span className="required">*</span>
                </label>
                <Form.Control placeholder="Last name" />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <label className="firstname">
                  Mobile Phone Number <span className="required">*</span>
                </label>

                <div className="col-sm-3 my-1">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">+853</div>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="inlineFormInputGroupUsername"
                      placeholder="Mobile Phone Number"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Form>
        </Row>
      </Container>
    </div>
  );
}
