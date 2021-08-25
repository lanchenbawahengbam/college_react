import React from "react";
import Registration from "./Registration";
import { Container, Row, Col } from "react-bootstrap";

function Academics() {
  return (
    <div>
      <br />
      <Container className="registration">
        <Row>
          <Col>
            <h>Registration</h>
          </Col>
        </Row>
      </Container>
      <br />
      <Container>
        <Row>
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-lg rounded-lg"
          >
            <Registration />
          </Col>
        </Row>
      </Container>
      <br />
    </div>
  );
}

export default Academics;
