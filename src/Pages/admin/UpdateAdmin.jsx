import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Col, Form, Row, Button, Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { BASE_URL } from '../../Helper/constant';
import AdminNavBar from '../../Components/AdminNavbar';
import { useParams } from 'react-router';

const UpdateAdmin = () => {

    const [admin, setAdmin] = useState({
        name: "",
        email: "",
        password: "",
        dob: "",
        contactNumber: "",
        joiningYear: ""
    })

    const history = useHistory();

    const { _id } = useParams();

    const { name, email, password, dob, contactNumber, joiningYear } = admin;

    const handleChange = (event) => {
        const { name, value } = event.target;

        setAdmin({
            ...admin,
            [name]: value
        })
    }

    const handleSubmit = async () => {
        const response = await axios.patch(`${BASE_URL}/admin/update/${_id}`, admin);
        console.log(response.data.result)
        history.push('/adminTable')
    }


    useEffect(() => {
        loadUser()
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`${BASE_URL}/admin/getSingleAdmin/${_id}`)
        setAdmin(result.data.result)
    }

    return (
        <>
            <AdminNavBar />
            <Container>
                <Row>
                    <Col xs={2} />
                    <Col xs={8}>
                        <Form style={{
                            marginTop: '50px',
                            padding: '30px',
                            fontSize: '24px',
                            fontWeight: '600'
                        }}>
                            <Row className="mb-3">

                                {/* NAME */}

                                <Form.Group
                                    className="mb-3" controlId="formGridName">
                                    <Form.Label>
                                        Name
                                    </Form.Label>
                                    <Form.Control
                                        placeholder="Enter Name"
                                        name="name"
                                        value={name}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                {/* EMAIL */}

                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>
                                        Email
                                    </Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        name="email"
                                        onChange={handleChange}
                                        value={email}
                                    />
                                </Form.Group>

                                {/* PASSWORD */}

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>
                                        Password
                                    </Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        onChange={handleChange}
                                        value={password}
                                    />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">

                                {/* DOB */}

                                <Form.Group as={Col} controlId="formGridDOB">
                                    <Form.Label>
                                        DOB
                                    </Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="dob"
                                        onChange={handleChange}
                                        value={dob}
                                    />
                                </Form.Group>

                                {/* CONTACT */}

                                <Form.Group as={Col} controlId="formGridContact">
                                    <Form.Label>
                                        Contact
                                    </Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="contactNumber"
                                        onChange={handleChange}
                                        value={contactNumber}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridJoiningYear">
                                    <Form.Label>
                                        Joining Year
                                    </Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="joiningYear"
                                        onChange={handleChange}
                                        value={joiningYear}
                                    />
                                </Form.Group>

                            </Row>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button
                                variant="primary"
                                onClick={() => handleSubmit()}
                            >
                                Update Account
                            </Button>
                        </Form>
                    </Col>
                    <Col xs={2} />
                </Row>
            </Container>
        </>
    )
}

export default UpdateAdmin

