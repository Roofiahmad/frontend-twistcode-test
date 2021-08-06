import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Button,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

export default function FooterComp(props) {
  const footerCheckbox = ["SMS & Mobile Call", "Emailing", "Mailing"];

  const subscribeHandler = (e) => {
    if (e.target.checked) {
      const newInput = { ...props.userInput };
      props.setUserInput({ ...newInput, subscribeBy: e.target.name });
    } else {
      const newInput = { ...props.userInput };
      props.setUserInput({ ...newInput, subscribeBy: "" });
    }
  };

  const termHandler = (e) => {
    const newInput = { ...props.userInput };
    props.setUserInput({ ...newInput, termAndCondition: e.target.checked });
  };

  const createCustomerHandler = () => {
    console.log(props.userInput);
    toggle();
  };

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

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
        <Row>
          <Col style={{ textAlign: "justify" }}>
            <p>
              I understand that the information collected will be used and
              retained by L'OCCITANE fot the purpose of (i) my application of
              membership rogram of L'OCCITANE (ii) providing member-exclusive
              services; and(iii) the daily management operation and maintenance
              of membership accountat L'OCCITANE
            </p>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "justify" }}>
            <p>
              I understand that it is necessary for me to provide L'OCCITANE
              with data in connection with the privilege. Failure to provide
              such data may result in L'OCCITANE stores or official websites
            </p>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "justify" }}>
            <p>
              L'OCCITANE reserves the right to change any of the terms and
              conditions without prior notice. Changes will be posted on signage
              placed at L'OCCITANE stores or official website.
            </p>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "justify" }}>
            <p>
              I understand that L'OCCITANE may use my personal information for
              the purpose of providing or promoting services/products made
              available by L'OCCITANE. To choose whether to receive any
              promotional information sent by L'OCCITANE, please tick the box
              below
            </p>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "justify" }}>
            <p>
              I want to receive information or communication from L'OCCITANE
            </p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={12}>
            <Row>
              {footerCheckbox.map((item) => {
                return (
                  <Col sm={12} md={4}>
                    <FormGroup check inline>
                      <Label check>
                        <Input
                          onChange={(e) => subscribeHandler(e)}
                          type="checkbox"
                          className="checkbox-title"
                          name={item}
                        />{" "}
                        {item}
                      </Label>
                    </FormGroup>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <FormGroup check inline>
              <Label check>
                <Input
                  onClick={(e) => termHandler(e)}
                  type="checkbox"
                  className="checkbox-title"
                  name="termAndCondition"
                />{" "}
                <p style={{ textAlign: "left" }}>
                  I have read and understood the above terms and conditions
                  andhereby agree that I will be bounded by these conditions and
                  olicies once I have submitted this application form
                </p>
              </Label>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={9}></Col>
          <Col md={3}>
            <Button
              onClick={createCustomerHandler}
              color="warning"
              style={{ width: "100%", fontWeight: "600" }}
            >
              CREATE CUSTOMER
            </Button>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h6>V.1.0.7</h6>
          </Col>
        </Row>
        <div>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>
              User registration Success !!!
            </ModalHeader>
          </Modal>
        </div>
      </Container>
    </div>
  );
}
