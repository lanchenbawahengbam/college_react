import React from "react";
import { Col, Row, Container } from "react-bootstrap";

function Computer() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h4>
              <strong>Department of Computer Science and Engineering</strong>
            </h4>
            <p>
              The Department presently offers the following programmes: <br />
              1. B.E. in Computer Science & Engineering <br />
              2. M. Tech in Computer Science & Engineering
            </p>
            <br />
            <h4>Faculty Members: </h4>
            <Container ClassName="computer">
              <Row>
                <Col
                  lg={5}
                  md={6}
                  sm={12}
                  className="p-5 m-auto shadow-lg rounded-lg"
                ></Col>
                <br />
                <Col
                  lg={5}
                  md={6}
                  sm={12}
                  className="p-5 m-auto shadow-lg rounded-lg"
                ></Col>
              </Row>
              <Row>
                <Col
                  lg={5}
                  md={6}
                  sm={12}
                  className="p-5 m-auto shadow-lg rounded-lg"
                ></Col>
                <br />
                <Col
                  lg={5}
                  md={6}
                  sm={12}
                  className="p-5 m-auto shadow-lg rounded-lg"
                ></Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Computer;
