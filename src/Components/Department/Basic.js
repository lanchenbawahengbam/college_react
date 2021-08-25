import React from "react";
import { Col, Row, Container } from "react-bootstrap";
function Basic() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h4>
              <strong>Department of Basic Sciences and Humanities</strong>
            </h4>

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

export default Basic;
