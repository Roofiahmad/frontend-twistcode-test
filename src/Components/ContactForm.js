import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FormGroup, Input, Col as Colstrap } from "reactstrap";

export default function ContactForm(props) {
  const dobHandler = (e) => {
    const newInput = { ...props.userInput };
    props.setUserInput({ ...newInput, dob: e.target.value });
  };
  const monthHandler = (e) => {
    const newInput = { ...props.userInput };
    props.setUserInput({ ...newInput, month: e.target.value });
  };
  const yearHandler = (e) => {
    const newInput = { ...props.userInput };
    props.setUserInput({ ...newInput, year: e.target.value });
  };

  const day = Array.from({ length: 30 }, (_, i) => i + 1);
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const emailHandler = (e) => {
    const newInput = { ...props.userInput };
    props.setUserInput({ ...newInput, email: e.target.value });
  };

  return (
    <div>
      <Container className="mt-3">
        <Row>
          <Col>
            <p className="new-account-title">Contact</p>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col sm={12} md={6}>
            <label className="firstname">
              Email Address <span className="required">*</span>
            </label>
            <Form.Control
              onChange={(e) => emailHandler(e)}
              type="email"
              placeholder="Email Address"
            />
          </Col>
          <Col sm={12} md={6}>
            <Row>
              <Col sm={12} md={"auto"}>
                <label className="firstname">
                  Date of birth <span className="required">*</span>
                </label>
                <FormGroup row>
                  <Colstrap>
                    <Input
                      onChange={(e) => dobHandler(e)}
                      type="select"
                      name="select"
                      id="exampleSelect"
                    >
                      <option>DD</option>
                      {day.map((item) => (
                        <option>{item}</option>
                      ))}
                    </Input>
                  </Colstrap>
                </FormGroup>
              </Col>
              <Col sm={12} md={"auto"}>
                <label className="firstname">
                  Month <span className="required">*</span>
                </label>
                <FormGroup row>
                  <Colstrap>
                    <Input
                      onChange={(e) => monthHandler(e)}
                      type="select"
                      name="select"
                      id="exampleSelect"
                    >
                      <option>MM</option>
                      {month.map((item) => (
                        <option>{item}</option>
                      ))}
                    </Input>
                  </Colstrap>
                </FormGroup>
              </Col>
              <Col sm={12} md={"auto"}>
                <label className="firstname">
                  Year <span className="required">*</span>
                </label>
                <Form.Control
                  type="number"
                  onChange={(e) => yearHandler(e)}
                  placeholder="YYYY"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
