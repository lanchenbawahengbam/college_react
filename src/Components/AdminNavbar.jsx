import React, { useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import * as urlConst from '../Helper/constant';

const AdminNavBar = () => {

    const history = useHistory();

    useEffect(() => {
        const auth = localStorage.getItem("auth");
        console.log("AUTH", auth, typeof auth);
        if (auth !== "true") {
            history.push("/login", { replace: true });
        }
    }, []);

    function handleButton(click) {
        switch (click) {
            case "admin":
                console.log('Click Admin');
                history.push(urlConst.ADMIN);
                break;
            case "addAdmin":
                console.log('Click AddAdmin');
                history.push(urlConst.ADDADMIN);
                break;
            case "viewAdmin":
                console.log('Click ViewAdmin');
                history.push(urlConst.VIEWADMIN);
                break;
            case "addDepartment":
                console.log('Click Add_Department');
                history.push(urlConst.ADD_DEPARTMENT);
                break;
            case "showDepartment":
                console.log('Click Show_Department');
                history.push(urlConst.SHOW_DEPARTMENT);
                break;
            case "addFaculty":
                console.log('Click Add_Faculty');
                history.push(urlConst.ADD_FACULTY);
                break;
            case "viewFaculty":
                console.log('Click Show_Faculty');
                history.push(urlConst.VIEWFACULTY);
                break;
            default:
                break;
        }
    }

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand onClick={() => handleButton("admin")}>Admin</Navbar.Brand>
                    <Nav className="justify-content-end">

                        <NavDropdown title="Admin" id="navbarScrollingDropdown">
                            <NavDropdown.Item onClick={() => handleButton("addAdmin")} > Add Admin</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => handleButton("viewAdmin")} > Show Admin</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Department" id="navbarScrollingDropdown">
                            <NavDropdown.Item onClick={() => handleButton("addDepartment")} > Add Department</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => handleButton("showDepartment")} > Show Department</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Faculty" id="navbarScrollingDropdown">
                            <NavDropdown.Item onClick={() => handleButton("addFaculty")} > Add Faculty</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => handleButton("viewFaculty")} > Show Faculty</NavDropdown.Item>
                        </NavDropdown>

                        {/* 
                        
                        
                        <NavDropdown title="Student" id="navbarScrollingDropdown">
                            <NavDropdown.Item onClick={() => handleButton("addStudent")} > Add Student</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleButton("showStudent")} > Show Student</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Admission" id="navbarScrollingDropdown">
                            <NavDropdown.Item onClick={() => handleButton("addAdmission")} > Add Admission</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => handleButton("showAdmission")} > Show Admission</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Container>
            </Navbar>

        </>
    )
}

export default AdminNavBar
