import React from "react";
import { Col, Container, NavLink, Row } from "react-bootstrap";

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <div className="nav-header">
              Department <hr />
            </div>
            <NavLink href="/civil" className="footer-link">
              Civil Engineering
            </NavLink>

            <NavLink href="/computer" className="footer-link">
              Computer Science Engineering
            </NavLink>
            <NavLink href="/electronics" className="footer-link">
              Electronic and Communication Engineering
            </NavLink>
            <NavLink href="/basic" className="footer-link">
              Basic Science and Huminities
            </NavLink>
            <NavLink href="/mechanical" className="footer-link">
              Mechanical Engineering
            </NavLink>
            <NavLink href="/electrical" className="footer-link">
              Electrical Engineering
            </NavLink>
          </Col>

          <Col>
            <div className="nav-header">
              Facility <hr />
            </div>
          </Col>
          <Col>
            <div className="nav-header">
              Address <hr />
              <p>Manipur Institute of Technology</p>
              <p>(A Constituent College of Manipur University</p>
              <p>Takyelpat, Imphal - 795001, Manipur , India</p>
            </div>
          </Col>
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} College React App - Developed by
              MIT Students
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
