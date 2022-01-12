import axios from 'axios';
import React, { useState } from 'react'
import { Nav, Navbar, NavDropdown, OverlayTrigger, Button, Popover, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import * as urlConst from '../Helper/constant'



const NavBar = () => {
    const history = useHistory();

    const [state, setState] = useState({
        departmentcode: "",

    })


    const handleChange = (event) => {
        const { name, value } = event.target;

        setState({
            ...state,
            [name]: value
        })
    }

    const onSubmit = async () => {
        const response = await axios.post(`${urlConst.BASE_URL}/faculty/getDepartmentFaculty`, state);
        console.log(response.data.result)
        history.push('/faculty/showFacultyDepartment')
    }


    function handleButton(check) {
        switch (check) {
            case "home":
                console.log("Home Clicked");
                history.push(urlConst.HOME)
                break;
            case "adminLogin":
                console.log("Admin Login Clicked");
                history.push(urlConst.ADMINLOGIN)
                break;
            case "facultyLogin":
                console.log("Faculty Login Clicked");
                history.push(urlConst.FACULTYLOGIN)
                break;
            case "principal":
                console.log("Principal Clicked");
                history.push(urlConst.PRINCIPAL)
                break;
            case "viceChancellor":
                console.log("Vice-Chancellor Clicked");
                history.push(urlConst.VICECHANCELLOR)
                break;
            case "hostel":
                console.log("Hostel Clicked");
                history.push(urlConst.HOSTEL)
                break;
            default:
                break;
        }
    }




    return (
        <>
            <Navbar bg="dark" variant="dark" expand="xl">
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => handleButton("home")}>Home</Nav.Link>


                        {['bottom'].map((placement) => (
                            <OverlayTrigger
                                trigger="click"
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Popover id='Department'>
                                        <Popover.Body>
                                            <Form.Control
                                                type="text"
                                                placeholder="Department Code"
                                                name="departmentcode"
                                                onChange={handleChange}
                                                value={state.departmentcode}
                                            />
                                            <div style={{ display: 'flex', marginTop: 20, marginLeft: 50 }} >
                                                <Button
                                                    type='submit'
                                                    onClick={() => onSubmit()}
                                                >Submit</Button>
                                            </div>
                                        </Popover.Body>
                                    </Popover>
                                }
                            >
                                <Button variant="black" style={{ color: 'white' }}>Department</Button>
                            </OverlayTrigger>
                        ))}

                        <NavDropdown title="Administration" id="collasible-nav-dropdown">
                            <NavDropdown.Item onClick={() => handleButton("principal")}>Principal</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleButton("viceChancellor")}>Vice-Chancellor</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleButton("hostel")}>Hostel Administration</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        {['start'].map((direction) => (
                            <NavDropdown
                                title="Login"
                                key={direction}
                                id={`dropdown-button-drop-${direction}`}
                                drop={direction}
                            >
                                <NavDropdown.Item onClick={() => handleButton("adminLogin")}>Admin Login</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleButton("facultyLogin")}>Faculty Login</NavDropdown.Item>
                            </NavDropdown>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>


    )
}

export default NavBar
