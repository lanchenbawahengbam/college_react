import axios from 'axios';
import React, { useState } from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import AdminNavBar from '../../Components/AdminNavbar';
import { BASE_URL } from '../../Helper/constant';

const AddFaculty = () => {

    const history = useHistory();

    const [state, setState] = useState({
        name: "",
        departmentcode: "",
        password: "",
        email: "",
        facultyMobileNumber: "",
        gender: "",
        qualification: "",
        designation: "",
    })


    const handleSubmit = async () => {
        const response = await axios.post(`${BASE_URL}/faculty/register`, state);
        console.log(response.data.result)
        history.push('/faculty/showFaculty')
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setState({
            ...state,
            [name]: value
        })
    }


    return (
        <>

            <AdminNavBar />

            <Container>
                <Row>
                    <Col xs={2} />
                    <Col xs={8}>
                        <Form style={{
                            marginTop: '10px',
                            padding: '30px',
                            fontSize: '24px',
                            fontWeight: '600'
                        }}>
                            <Row className="mb-3">

                                {/* Name */}

                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        placeholder="Enter Name"
                                        name="name"
                                        onChange={handleChange}
                                        value={state.name}
                                    />
                                </Form.Group>

                                {/* Email */}

                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email"
                                        name="email"
                                        onChange={handleChange}
                                        value={state.email}
                                        placeholder="Enter email" />
                                </Form.Group>

                                {/* Password */}

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        value={state.password}
                                        placeholder="Password" />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridQualification">
                                    <Form.Label>Qualification</Form.Label>
                                    <Form.Control
                                        name="qualification"
                                        onChange={handleChange}
                                        value={state.qualification} />
                                </Form.Group>

                                {/* Designation */}

                                <Form.Group as={Col} controlId="formGridDesignation">
                                    <Form.Label>Designation</Form.Label>
                                    <Form.Control
                                        name="designation"
                                        onChange={handleChange}
                                        value={state.designation} />
                                </Form.Group>
                            </Row>

                            {/* GENDER */}

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Control
                                        name="gender"
                                        onChange={handleChange}
                                        value={state.gender} />
                                </Form.Group>

                                {/* Contact */}

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Contact</Form.Label>
                                    <Form.Control
                                        name="facultyMobileNumber"
                                        onChange={handleChange}
                                        value={state.facultyMobileNumber} />
                                </Form.Group>

                                {/* Department */}

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Department</Form.Label>
                                    <Form.Control
                                        name="departmentcode"
                                        onChange={handleChange}
                                        value={state.department} />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button
                                variant="primary"
                                type="submit"
                                onClick={() => handleSubmit()}>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col xs={2} />
                </Row>
            </Container>

        </>
    )
}

export default AddFaculty
