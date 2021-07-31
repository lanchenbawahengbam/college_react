import React from 'react'
import { Col, Container, NavLink, Row } from 'react-bootstrap'
import { FaFacebookF } from 'react-icons/fa';
import { IoIosContact, IoLogoInstagram } from 'react-icons/io'
const Footer = () => {
    return (
        <div className="footer">
            <Container >
                <Row >
                    <Col >
                        <div className="nav-header">Department <hr /></div>
                        <NavLink href="/civil" className="footer-link">
                            Civil Engineering
                        </NavLink>
                        <NavLink href="/electronic" className="footer-link">
                            Electronic and Communication Engineering
                        </NavLink>
                        <NavLink href="/electrical" className="footer-link">
                            Electrical Engineering
                        </NavLink>
                        <NavLink href="/basic" className="footer-link">
                            Basic Science and Huminities
                        </NavLink>
                        <NavLink href="/computer" className="footer-link">
                            Computer Science Engineering
                        </NavLink>
                    </Col>
                    <Col>
                        <div className="nav-header">Contact Us <hr /></div>
                        <NavLink href="/" className="footer-link">
                            <FaFacebookF />
                        </NavLink>
                        <NavLink href="/" className="footer-link">
                            <IoLogoInstagram />
                        </NavLink>
                        <NavLink href="/" className="footer-link">
                            <IoIosContact />
                        </NavLink>
                    </Col>
                    <Col>
                        <div className="nav-header">Contact Us <hr /></div>
                    </Col>
                </Row>
            </Container >
        </div >
    )
}

export default Footer
