import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import AdminNavBar from '../../Components/AdminNavbar';
import { BASE_URL } from '../../Helper/constant';
import { useHistory } from 'react-router';


const AddAdmin = () => {

    const history = useHistory();

    const [state, setState] = useState({
        name: "",
        dob: new Date().getDate(),
        password: "",
        email: "",
        contactNumber: ""
    })


    const handleChange = (event) => {
        const { name, value } = event.target;

        setState({
            ...state,
            [name]: value
        })
    }

    const onSubmit = async () => {
        const response = await axios.post(`${BASE_URL}/admin/register`, state);
        console.log(response.data.result)
        history.push('/admin/viewAdmin')
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
                        }}
                        >
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
                                        onChange={handleChange}
                                        value={state.name}
                                    />
                                </Form.Group>

                                {/* EMAIL */}

                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>
                                        Email
                                    </Form.Label>
                                    <Form.Control
                                        placeholder="Enter email"
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        value={state.email}
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
                                        value={state.password}
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
                                        value={state.dob}
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
                                        value={state.contactNumber}
                                    />
                                </Form.Group>


                            </Row>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button
                                variant="primary"
                                onClick={() => onSubmit()}
                            >
                                Create Account
                            </Button>
                        </Form>
                    </Col>
                    <Col xs={2} />
                </Row>
            </Container>
        </>
    )
}

export default AddAdmin
