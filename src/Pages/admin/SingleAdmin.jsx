import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import { useParams } from 'react-router';
import AdminNavBar from '../../Components/AdminNavbar'
import { BASE_URL } from '../../Helper/constant';

const SingleAdmin = () => {

    const [singleAdminData, setSingleAdminData] = useState(
        {
            name: "",
            email: "",
            password: "",
            dob: "",
            contactNumber: "",
            joiningYear: ""
        }
    );

    const { name, email, password, dob, contactNumber, joiningYear } = singleAdminData;

    const { _id } = useParams();

    useEffect(() => {

        axios.get(`${BASE_URL}/admin/getSingleAdmin/${_id}`)
            .then(response => setSingleAdminData(response.data.result))
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

                    <h3 style={{ fontWeight: 600 }}>About Admin</h3>
                    < ListGroup >
                        <ListGroup.Item variant="dark">Name:- {name}</ListGroup.Item>
                        <ListGroup.Item variant="dark">Email:- {email}</ListGroup.Item>
                        <ListGroup.Item variant="dark">Password:- {password}</ListGroup.Item>
                        <ListGroup.Item variant="dark">DOB:- {dob}</ListGroup.Item>
                        <ListGroup.Item variant="dark">Contact:- {contactNumber}</ListGroup.Item>
                        <ListGroup.Item variant="dark">Year:- {joiningYear}</ListGroup.Item>
                    </ListGroup>
                    <Col xs={2} />
                </Row>
            </Container>
        </>
    )
}

export default SingleAdmin
