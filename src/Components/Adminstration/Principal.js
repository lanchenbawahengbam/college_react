import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Principal() {
  return (
    <div>
      <br />
      <Container className="prof">
        <Row>
          <Col>
            <h>Principal</h>
          </Col>
        </Row>
      </Container>
      <br />
      <div align="center">
        <img
          src="https://mitimphal.in/uploads/media/m1594871738.jpeg"
          alt=""
          width="500"
          height="700"
        />
      </div>
      <div align="center">&nbsp;</div>
      <div align="center">
        <strong>Professor N Basanta Singh</strong>
      </div>
      <div align="center">&nbsp;</div>
      <div align="center">
        <strong>Principal i/c&nbsp;</strong>(w.e.f: 1st&nbsp;July, 2020)
      </div>
      <div align="center">
        <strong>Member Secretary,</strong>&nbsp;
        <strong>Governing Body of MIT</strong>
      </div>
      <div align="center">&nbsp;</div>
      <div align="center">&nbsp;</div>
      <Container className="principal">
        <Row>
          <Col>
            <p>
              <strong>Prof. N. Basanta Singh </strong>was born in Imphal,
              Manipur, India. He received B-Tech degree from T.K.M. College of
              Engineering, Kerala, M.E from Thapar Institute of Engineering &
              Technology, Patiala and the Ph.D Degree from National Institute of
              Technology, Durgapur. He is a Professor in Department of
              Electronics & Communication Engineering, Manipur Institute of
              Technology, Manipur University, Manipur, India. He was the Head of
              the Department of Electronics & Communication Engineering, Manipur
              Institute of Technology during 2002-2008 and 2010-2014 and
              Coordinator of Industry-Institute-Interaction Cell (III Cell) of
              the institute from 2014. He is Member of IEEE, CSI, IETE and Life
              fellow of The Institution of Engineers (India). He has
              successfully organized four Refresher/Short Term Courses and one
              National Conference as Convener. He has attended more than 32
              Workshops/ Refresher/Short Term Courses. He has published more
              than 64 (journal:41 & conference: 23) technical research papers in
              referred journals and conferences. His current research interest
              includes Modelling and Simulation of Semiconductor Devices.
            </p>
          </Col>
        </Row>
      </Container>
      <br /> <br />
    </div>
  );
}

export default Principal;
