import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FormGroup, Label, Input, Col as Colstrap } from "reactstrap";

import axios from "axios";

import "./newAccount.css";

export default function NewAccount(props) {
  const title = ["Mrs", "Ms", "Mdm", "Mr", "Dr"];
  const [allCountry, setAllCountry] = useState([]);

  const checkboxHandler = (e) => {
    const newInput = { ...props.userInput };
    if (e.target.checked) {
      props.setUserInput({ ...newInput, title: e.target.name });
    } else {
      props.setUserInput({ ...newInput, title: "" });
    }
  };
  const firstNameHandler = (e) => {
    const newInput = { ...props.userInput };
    props.setUserInput({ ...newInput, firstName: e.target.value });
  };
  const lastNameHandler = (e) => {
    const newInput = { ...props.userInput };
    props.setUserInput({ ...newInput, lastName: e.target.value });
  };
  const phoneNumberHandler = (e) => {
    let callCode = "";
    if (props.selectedCountry.callCode) {
      callCode = props.selectedCountry.callCode;
    }
    const newInput = { ...props.userInput };
    props.setUserInput({
      ...newInput,
      mobilePhone: `+${callCode}${e.target.value}`,
    });
  };

  const getCountry = () => {
    axios
      .get("https://restcountries.eu/rest/v2/all ")
      .then((res) => {
        const datas = res.data;
        const countryResult = datas.map((country) => {
          return {
            name: country.name,
            flag: country.flag,
            callCode: country.callingCodes[0],
          };
        });
        setAllCountry(countryResult);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCountryChange = (e) => {
    const selectedCountry = allCountry.filter(
      (country) => country.name === e.target.value
    )[0];
    props.setSelectedCountry(selectedCountry);
  };

  useEffect(() => {
    if (allCountry.length === 0) {
      getCountry();
    }
  }, []);

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
                        <Input
                          onClick={(e) => checkboxHandler(e)}
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
        <Row>
          <Form>
            <Row className="mt-3">
              <Col sm={12} md={6}>
                <label className="firstname">
                  First name <span className="required">*</span>
                </label>
                <Form.Control
                  onChange={(e) => firstNameHandler(e)}
                  placeholder="First name"
                />
              </Col>
              <Col sm={12} md={6}>
                <label className="firstname">
                  Last name <span className="required">*</span>
                </label>
                <Form.Control
                  onChange={(e) => lastNameHandler(e)}
                  placeholder="Last name"
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <label className="firstname">
                  Mobile Phone Number <span className="required">*</span>
                </label>
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <FormGroup row>
                  <Colstrap>
                    <Input
                      onChange={(e) => handleCountryChange(e)}
                      type="select"
                      name="select"
                      id="exampleSelect"
                    >
                      {allCountry &&
                        allCountry.map((country) => {
                          return (
                            <option
                              selected={
                                country.name === props.selectedCountry.name
                                  ? true
                                  : false
                              }
                              style={{
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundImage: `url("${country.flag}")`,
                                height: "20px",
                                width: "20px",
                              }}
                            >
                              {country.name}
                            </option>
                          );
                        })}
                    </Input>
                  </Colstrap>
                </FormGroup>
              </Col>
              <Col md={10}>
                <div className="col-sm-4 ">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        +
                        {props.selectedCountry.callCode
                          ? props.selectedCountry.callCode
                          : "__"}
                      </div>
                    </div>
                    <input
                      onChange={(e) => phoneNumberHandler(e)}
                      type="number"
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
