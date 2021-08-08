import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

function Login() {
  return (
    <>
      <Container className="login">
        <Row className="mt-5">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-lg rounded-lg"
          >
            <div align="center">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/3/3d/Manipur_University_Logo.png"
                alt=""
                width="95"
                height="100"
              />
            </div>
            <br />
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="success btn-block" length="" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
        <p className="mt-5 p-5 text-center text-dark">
          Copyright &copy; {new Date().getFullYear()} College React App - All
          Rights Reserved
        </p>
      </Container>
      <br />
    </>
  );
}

export default Login;
