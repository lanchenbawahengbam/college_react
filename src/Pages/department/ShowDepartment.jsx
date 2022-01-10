import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import AdminNavbar from '../../Components/AdminNavbar';
import { BASE_URL } from '../../Helper/constant';

const ShowDepartment = () => {

    const [departmentData, setDepartmentData] = useState([]);

    useEffect(() => {

        axios.get(`${BASE_URL}/department/getDepartment`)
            .then(response => setDepartmentData(response.data.result))
            .catch((error) => {
                console.error('Error:', error)
            })
    }, [])

    return (
        <>
            <AdminNavbar />

            <Container style={{ marginTop: '50px', width: '50%' }}>
                <Row>
                    <Col xs={4} />
                    <Col xs={4}></Col>

                    <h2 style={{ marginBottom: '20px', textAlign: 'center', fontWeight: '600' }}>Department</h2>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Department Name</th>
                                <th>Department Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            {departmentData && departmentData.map((d, index) => {
                                const { departmentname, departmentcode } = d;
                                return (
                                    <tr key={index}>
                                        <td>{departmentname}</td>
                                        <td>{departmentcode}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>

                    <Col xs={4} />
                </Row>
            </Container>



        </>
    )
}

export default ShowDepartment
