import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

import * as urlConst from '../Helper/constant'



const NavBar = () => {


    const [departmentData, setDepartmentData] = useState([]);


    useEffect(() => {
        axios.get(`${urlConst.BASE_URL}/department/getDepartment`)
            .then(response => setDepartmentData(response.data.result))
            .catch((error) => {
                console.error('Error:', error)
            })
    }, [])

    const history = useHistory();


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

                        <NavDropdown title="Department" id="navbarScrollingDropdown">
                            {departmentData && departmentData.map((dept, idx) => (

                                <NavDropdown.Item key={idx} onClick={() => {
                                    console.log(departmentData)
                                    history.push(`/${dept.departmentcode}`)
                                }}>

                                    {dept.departmentname}

                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
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
