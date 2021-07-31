import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'



const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="xl">
                <Navbar.Collapse id="navbarScroll">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <NavDropdown title="Department" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/civil">Civil Engineering</NavDropdown.Item>
                            <NavDropdown.Item href="/computer">Computer Science Engineering</NavDropdown.Item>
                            <NavDropdown.Item href="/electronic">Electronic & Communication Engineering</NavDropdown.Item>
                            <NavDropdown.Item href="/electrical">Electrical Engineering</NavDropdown.Item>
                            <NavDropdown.Item href="/basic">Basic Science & Huminities</NavDropdown.Item>
                        </NavDropdown>     
                        <Nav.Link href="/Login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

               
        </>

        
    )
}

export default NavBar
