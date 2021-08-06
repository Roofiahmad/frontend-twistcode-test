import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { FormGroup, Input, Col as Colstrap } from "reactstrap";

import axios from "axios";

export default function AddressForm(props) {
  const [allCountry, setAllCountry] = useState([]);
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

  const addressHandler = (e) => {
    const newInput = { ...props.userInput };
    props.setUserInput({ ...newInput, address: e.target.value });
  };

  const provinceHandler = (e) => {
    const newInput = { ...props.userInput };
    props.setUserInput({ ...newInput, province: e.target.value });
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
      <Container className="mt-3">
        <Row>
          <Col>
            <p className="new-account-title">Address</p>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <label className="firstname">Address</label>
            <Form.Control
              onChange={(e) => addressHandler(e)}
              placeholder="Address"
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col sm={12} md={6}>
            <label className="firstname">
              Country/Location <span className="required">*</span>
            </label>
            <FormGroup row>
              <Colstrap>
                <Input
                  onChange={(e) => {
                    handleCountryChange(e);
                  }}
                  type="select"
                  name="select"
                  id="exampleSelect"
                >
                  <option>Select Country/Location</option>
                  {allCountry &&
                    allCountry.map((country) => {
                      return (
                        <option
                          selected={
                            country.name === props.selectedCountry.name
                              ? true
                              : false
                          }
                        >
                          {country.name}
                        </option>
                      );
                    })}
                </Input>
              </Colstrap>
            </FormGroup>
          </Col>
          <Col sm={12} md={6}>
            <label className="firstname">
              Province/District <span className="required">*</span>
            </label>
            <Form.Control
              onChange={(e) => provinceHandler(e)}
              placeholder="Province/District"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
