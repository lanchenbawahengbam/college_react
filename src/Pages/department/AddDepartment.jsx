import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import AdminNavbar from '../../Components/AdminNavbar';
import { BASE_URL } from '../../Helper/constant';

const AddDepartment = () => {

    const history = useHistory();

    const [state, setState] = useState({
        departmentname: "",
        departmentcode: "",
    });

    const handleSubmit = async () => {
        const response = await axios.post(`${BASE_URL}/department/add`, state);
        console.log(response.data.result)
        history.push('/department/showDepartment')
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        })
    }

    return (
        <>
            <AdminNavbar />

            <Container >
                <Row>
                    <Col xs={2} />
                    <Col xs={8}>

                        <Form
                            style={{
                                marginTop: '10px',
                                padding: '30px',
                                fontSize: '24px',
                                fontWeight: '600'
                            }}>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Department Name</Form.Label>
                                    <Form.Control
                                        name="departmentname"
                                        onChange={handleChange}
                                        value={state.departmentname}
                                    />


                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridZip">

                                    <Form.Label>Department Code</Form.Label>
                                    <Form.Control
                                        name="departmentcode"
                                        onChange={handleChange}
                                        value={state.departmentcode}
                                    />

                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button
                                variant="primary"
                                type="submit"
                                onClick={() => handleSubmit()}>
                                Create
                            </Button>
                        </Form>
                    </Col>
                    <Col xs={2} />
                </Row>
            </Container>
        </>
    )
}

export default AddDepartment
