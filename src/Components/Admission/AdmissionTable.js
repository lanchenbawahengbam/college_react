import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Col, Container, Row } from "react-bootstrap";
import { BASE_URL } from "../../Helper/constant";

function AdmissionTable() {
  const [admissionData, setAdmissionData] = useState([]);

  useEffect(() => {
    getAdmin();
  }, []);

  const getAdmin = () => {
    axios
      .get(`${BASE_URL}/admission/getAdmittedStudent`)
      .then((response) => setAdmissionData(response.data.result))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <br />
      <Container>
        <Row>
          <Col xs={2} />
          <Col xs={8}></Col>

          <h3 id="table-header">Admitted Student Record</h3>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th className="table-id">Sl. No.</th>
                <th id="th-data">Name</th>
                <th id="th-data">Roll No.</th>
                <th id="th-data">Semester</th>
                <th id="th-data">Year</th>
                <th id="th-data">Gender</th>
                <th id="th-data">Email</th>
                <th id="th-data">Department</th>
                <th id="th-data">Transaction_Id</th>
                <th id="th-data">Amount</th>
                <th id="th-data">Mobile No.</th>
              </tr>
            </thead>
            <tbody>
              {admissionData &&
                admissionData.map((d, index) => (
                  <tr key={index}>
                    <th className="table-id">{index + 1}</th>
                    <td> {d.name} </td>
                    <td>{d.registrationNumber} </td>
                    <td> {d.semester}</td>
                    <td> {d.year} </td>
                    <td> {d.gender}</td>
                    <td> {d.email}</td>
                    <td> {d.departmentcode}</td>
                    <td> {d.transactionId}</td>
                    <td> {d.amount}</td>
                    <td> {d.studentMobileNumber}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <Col xs={2} />
        </Row>
      </Container>
    </div>
  );
}

export default AdmissionTable;
