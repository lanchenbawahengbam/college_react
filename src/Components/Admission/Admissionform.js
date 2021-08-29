import React from "react";
import axios from "axios";
import { useState } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../../Helper/constant";

function Admissionform() {
  const history = useHistory();

  const [state, setState] = useState({
    name: "",
    email: "",
    semester: "",
    year: "",
    departmentcode: "",
    gender: "",
    transactionId: "",
    amount: "",
    registrationNumber: "",
    studentMobileNumber: "",
  });

  const handleSubmit = () => {
    axios({
      method: "post",
      url: `${BASE_URL}/admission/register`,
      data: state,
      transformRequest: [
        function (data, headers) {
          headers["Content-Type"] = "application/json";
          return JSON.stringify(data);
        },
      ],
    })
      .then((response) => {
        console.log("Success:", response);
        alert("SUCCESS");
        history.push("/admissionTable");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("FAIL");
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div>
      <br />
      <Container>
        <Row>
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-lg rounded-lg"
          >
            <div align="center">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/3/3d/Manipur_University_Logo.png"
                alt=""
                width="95"
                height="100"
              />
              <br />
              <br />
            </div>

            <Col className="mb-3">
              <Form.Group as={Col} md="13" controlId="validationCustom01">
                <Form.Label>Name in Full*</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter full name"
                  name="name"
                  onChange={handleChange}
                  value={state.name}
                />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>Roll No.*</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter MU roll no."
                    name="registrationNumber"
                    onChange={handleChange}
                    value={state.registrationNumber}
                  />
                </Form.Group>
                <br />

                <Form.Group as={Col} md="3" controlId="validationCustom03">
                  <Form.Label>Semester*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Semester"
                    required
                    name="semester"
                    onChange={handleChange}
                    value={state.semester}
                  />
                </Form.Group>

                <Form.Group as={Col} md="3" controlId="validationCustom03">
                  <Form.Label>Year*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Year"
                    required
                    name="year"
                    onChange={handleChange}
                    value={state.year}
                  />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <Form.Label>Gender*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Gender"
                    required
                    name="gender"
                    onChange={handleChange}
                    value={state.gender}
                  />
                </Form.Group>
                {/* <fieldset>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label as="legend" column sm={2}>
                      Gender
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        label="Male"
                        name="gender"
                        onChange={handleChange}
                        value={state.male}
                        id="formHorizontalRadios1"
                      />

                      <Form.Check
                        type="radio"
                        label="Female"
                        name="gender"
                        onChange={handleChange}
                        value={state.female}
                        id="formHorizontalRadios2"
                      />
                    </Col>
                  </Form.Group>
                </fieldset> */}

                <Form.Group as={Col} md="8" controlId="validationCustom04">
                  <Form.Label>Email*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter email"
                    required
                    name="email"
                    onChange={handleChange}
                    value={state.email}
                  />
                </Form.Group>

                <Form.Group as={Col} md="13" controlId="validationCustom04">
                  <Form.Label>Department*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Department"
                    required
                    name="departmentcode"
                    onChange={handleChange}
                    value={state.departmentcode}
                  />
                </Form.Group>
              </Row>
            </Col>

            <Row className="mb-3">
              <Form.Group as={Col} md="5" controlId="validationCustom02">
                <Form.Label>Transaction id*</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Transaction id"
                  name="transactionId"
                  onChange={handleChange}
                  value={state.transactionId}
                />
              </Form.Group>
              <br />

              <Form.Group as={Col} md="3" controlId="validationCustom03">
                <Form.Label>Amount*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="₹"
                  required
                  name="amount"
                  onChange={handleChange}
                  value={state.amount}
                />
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="validationCustom03">
                <Form.Label>Mobile No.*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="+91"
                  required
                  name="studentMobileNumber"
                  onChange={handleChange}
                  value={state.studentMobileNumber}
                />
              </Form.Group>
            </Row>
            <br />
            <Button variant="primary" onClick={() => handleSubmit()}>
              Submit form
            </Button>
          </Col>
        </Row>
      </Container>
      <br />
    </div>
  );
}

export default Admissionform;
