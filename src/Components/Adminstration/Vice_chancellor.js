import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Vice_chancellor() {
  return (
    <div>
      <br />
      <Container className="prof">
        <Row>
          <Col>
            <h>Vice-Chancellor</h>
          </Col>
        </Row>
      </Container>
      <br /> <br />
      <div align="center">
        <img
          src="https://www.manipuruniv.ac.in/upload/30384946f165ddc4929d5cec291684eb.jpg"
          alt=""
        />
      </div>
      &nbsp;
      <p className="vice">
        <strong>
          Prof.&nbsp;Naorem Lokendra&nbsp;Singh
          <br />
        </strong>
        <strong>
          Vice-Chancellor, Manipur University <br />
        </strong>
        <strong>Chairman, Governing Body of MIT</strong>
      </p>
      <br /> <br /> <br /> <br /> <br /> <br /> <br />
    </div>
  );
}

export default Vice_chancellor;
