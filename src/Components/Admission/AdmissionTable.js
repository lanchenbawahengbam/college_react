import React from "react";
import { Table, Col, Container, Row } from "react-bootstrap";

function AdmissionTable() {
  return (
    <div>
      <br />
      <Container>
        <Row>
          <Col xs={2} />
          <Col xs={8}></Col>

          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Name</th>
                <th>Roll No.</th>
                <th>Semester</th>
                <th>Department</th>
                <th>Gender</th>
                <th>Address</th>

                <th>Mobile No.</th>
                <th>Transaction id</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td>2</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
              <tr>
                <td>3</td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> </td>
              </tr>
            </tbody>
          </Table>
          <Col xs={2} />
        </Row>
      </Container>
    </div>
  );
}

export default AdmissionTable;
