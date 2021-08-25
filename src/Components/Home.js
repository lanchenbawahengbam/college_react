import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Carousel } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={2500}>
          <img
            className="imgSlider"
            src="https://mitimphal.in/uploads/slider/sld1624378642.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="carouselCaption">
            <h3>Vaccines for all</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="imgSlider"
            src="https://mitimphal.in/uploads/slider/sld1544003989.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="carouselCaption">
            <h3>
              Shri Jarnail Singh,
              <br /> Administrator, <br />
              Manipur University with Prize Winner of MIT WEEK 2018
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="imgSlider"
            src="https://mitimphal.in/uploads/slider/sld1579772758.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="carouselCaption">
            <h3>
              Inauguration of AICTE sponsored 3-days Faculty Development
              Programme on “Universal Human Values”
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="imgSlider"
            src="https://mitimphal.in/uploads/slider/sld1544005459.jpg"
            alt="Forth slide"
          />
          <Carousel.Caption className="carouselCaption">
            <h3>MIT WEEK 2018 OVERALL TEAM CHAMPION</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="imgSlider"
            src="https://mitimphal.in/uploads/slider/sld1542788295.jpg"
            alt="Fifth slide"
          />
          <Carousel.Caption className="carouselCaption">
            <h3>MIT WEEK 2018 OPENING CEREMONY (12th NOV, 2018)</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img
            className="imgSlider"
            src="https://mitimphal.in/uploads/slider/sld1507277462.jpg"
            alt="Sixth slide"
          />
          <Carousel.Caption className="carouselCaption">
            <h3>New Building of MIT at MU Campus</h3>
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
