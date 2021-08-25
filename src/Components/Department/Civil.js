import React from "react";
import { Col, Row, Container } from "react-bootstrap";
function Civil() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h4>
              <strong>Department of Civil Engineering</strong>
            </h4>
            <p>
              Civil Engineering department presently offers the following
              programmes: <br />
              1. B.E. in Civil Engineering <br />
              2. M. Tech. in the following specialisations &nbsp; &nbsp; a)
              Structural Engineering
              <br />
              &nbsp; &nbsp; b) Geotechnical Engineering
              <br />
              &nbsp; &nbsp; c) Water Resources Engineering
              <br />
              &nbsp; &nbsp; d) Transportation Engineering
              <br />
              &nbsp; &nbsp; e) Environmental Engineering
              <br />
              3. Ph. D. in Civil Engineering
            </p>
            <p>&nbsp;</p>

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

export default Civil;
