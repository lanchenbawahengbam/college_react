import axios from 'axios';
import React, { useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router';
import { BASE_URL } from '../Helper/constant';
import { Formik } from 'formik';
import * as yup from "yup";
import { RiAccountCircleFill } from 'react-icons/ri';

const FacultyLogin = () => {

    const history = useHistory();

    useEffect(() => {
        localStorage.setItem("auth", false);
        localStorage.setItem("token", "");
    }, []);

    return (
        <>

            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                validationSchema={
                    yup.object({
                        email: yup
                            .string("Enter your email")
                            .email("Enter a valid email")
                            .required("Email is required"),
                        password: yup
                            .string("Enter your password")
                            .min(5, "Password should be of minimum 5 characters length")
                            .required("Password is required"),
                    })}
                onSubmit={(payload) => {
                            const { email, password } = payload;
                            return (
                                axios.post(`${BASE_URL}/faculty/login`,
                                    {
                                        email: email,
                                        password: password,
                                    })
                                    .then(response => {
                                        const {
                                            data: { token },
                                        } = response;
                                        localStorage.setItem("auth", true);
                                        localStorage.setItem("token", token);
                                        console.log('Success:', response);
                                        alert("Success")
                                        history.push("/admin")
                                    })
                                    .catch((error) => {
                                        console.error('Error:', error);
                                        alert("Login Fail")
                                    })
                            )
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    errors
                }) => (
                    <Form style={{
                        width: '40%',
                        margin: 'auto',
                        marginTop: '50px',
                        borderRadius: '20px',
                        height: '150%',
                        padding: '50px',
                        backgroundColor: '#FAFAFA'
                    }} onSubmit={handleSubmit} >
                        <Form.Group>

                            <h2 style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                fontSize: 30
                            }}>
                                <RiAccountCircleFill />
                                FACULTY LOGIN
                            </h2>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                onChange={handleChange}
                                value={values.email}
                                onBlur={handleBlur}
                                className={touched.email && errors.email ? "error" : null}
                                autoFocus
                            />
                            {touched.email && errors.email ? (
                                <div className="error-message">{errors.email}</div>
                            ) : null}
                        </Form.Group>
                        <Form.Group style={{ marginTop: 30 }}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                onChange={handleChange}
                                value={values.password}
                                onBlur={handleBlur}
                                className={touched.password && errors.password ? "error" : null}
                            />
                            {touched.password && errors.password ? (
                                <div className="error-message">{errors.password}</div>
                            ) : null}
                        </Form.Group>
                        {/* <Form.Group>
                            <Form.Check type="checkbox" label="Remember" />
                        </Form.Group> */}
                        {/* <p>
                            Forgot <a href="#">password?</a>
                        </p> */}
                        <Button
                            style={{
                                width: "100%",
                                marginTop: "40px"
                            }}
                            type="submit"
                        >Login</Button>
                    </Form>
                )}
            </Formik>
            )
        </>
    )
}

export default FacultyLogin
