import React, { useEffect } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../Helper/constant";

function NavBar() {

  const [department, setDepartment] = React.useState([])
  const history = useHistory();

  useEffect(() => {
    fetch(`${BASE_URL}/department/`, {
      method: 'GET', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => {
        setDepartment(data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [])



  return (
    <div>
      <Navbar bg="secondary" variant="dark" expand="xl">
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
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
              {department && department.map((dept, idx) => (

                <NavDropdown.Item key={idx} onClick={() => { history.push(`/${dept.value}`) }}>
                  {dept.name}
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
