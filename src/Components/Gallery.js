import React from "react";
import { Card, Button, Container, Col, Row } from "react-bootstrap";

function Gallery() {
  return (
    <div>
      <br />
      <Container>
        <Row>
          <Card className="card" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://mitimphal.in/uploads/gallery/gly1472230450_medium.jpg"
            />
            <Card.Body>
              <Card.Title>Archieve</Card.Title>

              <Button variant="primary">Go</Button>
            </Card.Body>
          </Card>
          <br />
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://mitimphal.in/uploads/gallery/gly1544005352_medium.jpg "
            />
            <Card.Body>
              <Card.Title>MIT Week</Card.Title>

              <Button variant="primary">Go</Button>
            </Card.Body>
          </Card>
          <br />
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://mitimphal.in/uploads/gallery/gly1482486644_medium.jpg"
            />
            <Card.Body>
              <Card.Title>Smart India Hackathon</Card.Title>

              <Button variant="primary">Go</Button>
            </Card.Body>
          </Card>
          <br />
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://mitimphal.in/uploads/gallery/gly1492084223_medium.jpg"
            />
            <Card.Body>
              <Card.Title>National Conference</Card.Title>

              <Button variant="primary">Go</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default Gallery;
