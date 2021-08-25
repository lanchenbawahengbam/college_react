import React from "react";
import { Form, Button, Col, Container, Row } from "react-bootstrap";

function Contact() {
  return (
    <div>
      <Container ClassName="contact_us">
        <Row className="mt-5">
          <Col>
            <br />
            <br />
            <br />
            <h2>CONTACT US</h2>
            <p>Manipur Institute of Technology</p>
            <p>(A Constituent College of Manipur University)</p>
            <p>Takyelpat, Imphal - 795001, Manipur , India</p>
          </Col>
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
              <br />
              <br />
            </div>
            <h4>Drop Us a Message</h4>
            <br />
            <Form>
              <Form.Control type="text" placeholder="Enter Your Name" />
              <br />
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter Your email" />
              </Form.Group>
              <br />
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  type="text"
                  placeholder="Enter Your Mobile Number"
                />
              </Form.Group>
              <br />
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  as="textarea"
                  placeholder="Enter Your Message"
                  rows={3}
                />
              </Form.Group>
              <br />

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <br />
        </Row>
        <br />
        <Row>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.217364776936!2d93.92491947179013!3d24.754725288932192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374925ce7ee0c749%3A0x4e577411f1653a2d!2sManipur%20Institute%20of%20Technology%2C%20Manipur%20University!5e1!3m2!1sen!2sin!4v1629392331068!5m2!1sen!2sin"
            style={{ border: "0" }}
            width="100%"
            height="450"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </Row>
      </Container>

      <br />
    </div>
  );
}

export default Contact;
