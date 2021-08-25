import React from "react";
import { Col, Row, Container } from "react-bootstrap";
function Electronics() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h4>
              <strong>
                Department of Electronics and Communication Engineering
              </strong>
            </h4>
            <p>
              he Department presently offers the following programmes:
              <br />
              1. B.E. in Electronics &amp; Communication Engineering
              <br />
              2. M. Tech in the following specialisations :<br />
              &nbsp; &nbsp; a) Microelectronics and VSLI
              <br />
              &nbsp; &nbsp; b) Communication and Signal Processing
              <br />
              3. Ph. D. in Electronics &amp; Communication Engineering
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

export default Electronics;
