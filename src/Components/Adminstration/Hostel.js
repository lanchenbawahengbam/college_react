import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Hostel() {
  return (
    <div>
      <br />
      <Container className="prof">
        <Row>
          <Col>
            <h>Hostel Administration</h>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <p>
              <p></p>
              <strong>Administration of Hostels</strong> <br />
              The Institute has two Boys&rsquo; Hostel and one Ladies Hostel for
              a total capacity of 100 , 50 &nbsp;and 100 respectively and are
              managed by two wardens. <br />
              <p></p>
              <strong>Dr. N. Premananda Singh</strong>, Asst. Prof.
              of&nbsp;Civil Engg.&nbsp;Dept. is the present warden of Gents'
              Hostel I &amp; II. <br />
              <p></p>
              <strong>Ghaneshwori Thingbaijam,&nbsp;</strong>
              Asst. Prof. of&nbsp;Electronics &amp; Commnication
              Engg.&nbsp;Dept. is the&nbsp;current warden of Girls' Hostel.
            </p>{" "}
            <br />
            <br />
            <br />
            <br />
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hostel;
