import React, { useEffect } from "react";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../Helper/constant";

function Footer() {
  const [department, setDepartment] = React.useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(`${BASE_URL}/department/`, {
      method: "GET", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setDepartment(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <div className="nav-header">
              Department <hr />
            </div>
            <NavLink title="Department" id="navbarScrollingDropdown">
              {department &&
                department.map((dept, idx) => (
                  <NavLink
                    key={idx}
                    onClick={() => {
                      history.push(`/${dept.value}`);
                    }}
                  >
                    {dept.name}
                  </NavLink>
                ))}
            </NavLink>

            {/* <NavLink href="/computer" className="footer-link">
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
            </NavLink> */}
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.217364776936!2d93.92491947179013!3d24.754725288932192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374925ce7ee0c749%3A0x4e577411f1653a2d!2sManipur%20Institute%20of%20Technology%2C%20Manipur%20University!5e1!3m2!1sen!2sin!4v1629392331068!5m2!1sen!2sin"
                style={{ border: "0" }}
                width="90%"
                height="250"
                allowfullscreen="allowfullscreen"
              ></iframe>
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
