import React, { useEffect, useState } from "react";
import axios from "axios";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import * as urlConst from "../Helper/constant";

function NavBar() {
  const [departmentData, setDepartmentData] = useState([]);
  useEffect(() => {
    axios
      .get(`${urlConst.BASE_URL}/department/getDepartment`)
      .then((response) => setDepartmentData(response.data.result))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  const history = useHistory();

  function handleButton(check) {
    switch (check) {
      case "home":
        console.log("Home Clicked");
        history.push(urlConst.HOME);
        break;
      case "login":
        console.log("Login Clicked");
        history.push(urlConst.LOGIN);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <Navbar bg="secondary" variant="dark" expand="xl">
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleButton("home")}>Home</Nav.Link>
            <Nav.Link href="/Academics">Academics</Nav.Link>
            <NavDropdown title="Administration" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Vice_chancellor">
                Vice-chancellor
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/principal">Principal</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/institute">
                Institute Administration
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/hostel">
                Hostel Administration
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Department" id="navbarScrollingDropdown">
              {departmentData &&
                departmentData.map((dept, idx) => (
                  <NavDropdown.Item
                    key={idx}
                    onClick={() => {
                      console.log(departmentData);
                      history.push(`/${dept.departmentcode}`);
                    }}
                  >
                    {dept.departmentname}
                  </NavDropdown.Item>
                ))}
            </NavDropdown>
            <Nav.Link href="/Facility">Facility</Nav.Link>
            <Nav.Link href="/Gallery">Gallery</Nav.Link>
            <Nav.Link href="/Contact">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="/Login">Login</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
