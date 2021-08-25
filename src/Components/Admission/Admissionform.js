import React from "react";
import { useState } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";

function Admissionform() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
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
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Col className="mb-3">
                <Form.Group as={Col} md="13" controlId="validationCustom01">
                  <Form.Label>Name in Full</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter full name"
                  />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Roll No.</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter MU roll no."
                    />
                  </Form.Group>
                  <br />
                  <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Year/Semester</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Year/Semester"
                      required
                    />
                  </Form.Group>
                  <fieldset>
                    <Form.Group as={Row} className="mb-3">
                      <Form.Label as="legend" column sm={2}>
                        Gender
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Check
                          type="radio"
                          label="Male"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios1"
                        />

                        <Form.Check
                          type="radio"
                          label="Female"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios2"
                        />
                      </Col>
                    </Form.Group>
                  </fieldset>
                  <Form.Group as={Col} md="13" controlId="validationCustom04">
                    <Form.Label>Department</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Department"
                      required
                    />
                  </Form.Group>
                </Row>
              </Col>
              <Row className="mb-3">
                <Form.Group as={Col} md="13" controlId="validationCustom03">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Permanent Address"
                    required
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>Transaction id</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Transaction id"
                  />
                </Form.Group>
                <br />
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label>Mobile No.</Form.Label>
                  <Form.Control type="text" placeholder="+91" required />
                </Form.Group>
              </Row>
              <Button type="submit">Submit form</Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <br />
    </div>
  );
}

export default Admissionform;
