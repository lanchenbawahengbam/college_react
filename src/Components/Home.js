import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import image1 from "../Components/assets/images/1.png";
import image2 from "../Components/assets/images/2.png";
import image3 from "../Components/assets/images/3.png";
import image4 from "../Components/assets/images/4.png";
import image5 from "../Components/assets/images/5.png";
import image6 from "../Components/assets/images/6.png";
function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="imgSlider" src={image1} alt="First slide" />
          <Carousel.Caption>
            <h3>Computer Science & Engineering</h3>
            <p>A picture of Artificial Intelligence</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="imgSlider" src={image2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Civil Engineering</h3>
            <p>A picture of AutoCad</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="imgSlider" src={image3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Electronics & Communication Engineering</h3>
            <p>A picture representation on Circuit Board</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="imgSlider" src={image4} alt="Forth slide" />
          <Carousel.Caption>
            <h3>Electrical Engineering</h3>
            <p>A picture representation on wire connection</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="imgSlider" src={image5} alt="Fifth slide" />
          <Carousel.Caption>
            <h3>Mechanical Engineering</h3>
            <p>A picture representation on Automobile testing</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="imgSlider" src={image6} alt="Sixth slide" />
          <Carousel.Caption>
            <h3>Basic Science & Humanity</h3>
            <p>A picture representation on Chemistry Lab</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container>
        <Row>
          <Col>
            <br />
            <div className="headline">
              <h2>
                Welcome to Manipur Institute of Technology (AICTE-NEQIP funded)
              </h2>
            </div>
            <p></p>
            <p className="body">
              The Manipur Institute of Technology (erstwhile Government College
              of Technology) was established on 28th August 1998 by the
              Government of Manipur as Pioneer Engineering College in the State.
              On 31st December 2003, the College was renamed as Manipur College
              of Technology and the management of the College was handed over to
              a Society headed by the Hon’ble Chief Minister of Manipur as
              Chairman. Further, the Institute was renamed as Manipur Institute
              of Technology (MIT) since 4th February 2005. MIT became a
              Constituent College of Manipur University w.e.f. 13th October
              2005.
              <p></p>
              <strong>OUR VISION</strong>
              <br /> Excellence in engineering and technology education with
              good leadership in Human Resource Development.
              <br />
              <p></p>
              <strong>OUR MISSION</strong> <br />
              To produce technically strong, innovative, research oriented, all
              round developed engineers capable to solve modern challenges by
              adopting student centric teaching learning methods.
              <br />
              To impart engineering and technology education for all round
              development.
              <br />
              To produce good engineering professionals with social commitment.
              <br />
              <p></p>
              <strong>CAMPUS INFORMATION</strong> <br />
              <p></p>
              <strong>Takyelpat Campus</strong> <br />
              <p></p>
              MIT Takyelpat campus is located just adjacent to NH 37 (New Cachar
              Road) approximately 4 Kms. from the heart of Imphal City. It is
              about 6 Kms from Imphal International Airport, Tulihal, Imphal
              <br />
              <p></p>
              <strong>Manipur University Campus (Canchipur)</strong> <br />
              <p></p>
              MIT Manipur University Campus is located at Canchipur, Imphal, the
              capital city of Manipur. The University campus is spread over an
              area of 287 acres in the historic Canchipur which is the site of
              the old palace of Manipur “The Langthabal Konung (Palace)” which
              was established by Maharaja Ghambhir Singh in 1827 AD just after
              the liberation of Manipur from Burmese (Myanmar) occupation.
              Maharaja Gambhir Singh took his last breath at Canchipur.
              Canchipur is located along the National Highway (NH-2) at about 8
              km. from the heart of the Imphal City and 12 km. from Imphal
              International Airport.
            </p>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
    </div>
  );
}
export default Home;
