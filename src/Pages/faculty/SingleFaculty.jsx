import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import { useParams } from 'react-router';
import AdminNavBar from '../../Components/AdminNavbar'
import { BASE_URL } from '../../Helper/constant';

const SingleFaculty = () => {

    const [singleFacultyData, setSingleFacultyData] = useState(
        {
            name: "",
            departmentcode: "",
            password: "",
            email: "",
            facultyMobileNumber: "",
            gender: "",
            qualification: "",
            designation: "",
        }
    );

    const { name, departmentcode, password, email, facultyMobileNumber, gender, qualification, designation } = singleFacultyData;

    const { _id } = useParams();

    useEffect(() => {

        axios.get(`${BASE_URL}/faculty/getSingleFaculty/${_id}`)
            .then(response => setSingleFacultyData(response.data.result))
            .catch((error) => {
                console.error('Error:', error)
            })
    }, [])

    return (
        <>
            <AdminNavBar />
            <Container style={{
                width: '50%',
                margin: 'auto',
                paddingLeft: '100px',
                marginTop: '20px'
            }}>
                <Row>
                    <Col xs={2} />
                    <Col xs={8}></Col>

                    <h3 style={{ fontWeight: 600 }}>About Faculty</h3>
                    < ListGroup >
                        <ListGroup.Item variant="dark">Name:- {name}</ListGroup.Item>
                        <ListGroup.Item variant="dark">Email:- {email}</ListGroup.Item>
                        <ListGroup.Item variant="dark">Password:- {password}</ListGroup.Item>
                        <ListGroup.Item variant="dark">Gender:- {gender}</ListGroup.Item>
                        <ListGroup.Item variant="dark">Contact:- {facultyMobileNumber}</ListGroup.Item>
                        <ListGroup.Item variant="dark">Qualification:- {qualification}</ListGroup.Item>
                        <ListGroup.Item variant="dark">Designation:- {designation}</ListGroup.Item>
                        <ListGroup.Item variant="dark">Department Code:- {departmentcode}</ListGroup.Item>
                    </ListGroup>
                    <Col xs={2} />
                </Row>
            </Container>
        </>
    )
}

export default SingleFaculty