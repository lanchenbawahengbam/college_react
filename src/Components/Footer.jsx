import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { useHistory } from "react-router-dom";

import * as urlConst from "../Helper/constant";

const Footer = () => {

    const [departmentData, setDepartmentData] = useState([]);

    const history = useHistory();

    useEffect(() => {
        axios
            .get(`${urlConst.BASE_URL}/department/getDepartment`)
            .then((response) => setDepartmentData(response.data.result))
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
                            {departmentData &&
                                departmentData.map((dept, idx) => (
                                    <NavLink
                                        key={idx}
                                        onClick={() => {
                                            history.push(`/${dept.departmentcode}`);
                                        }}
                                    >
                                        {dept.departmentname}
                                    </NavLink>
                                ))}
                        </NavLink>
                    </Col>

                    <Col>
                        <div className="nav-header">
                            Contact us <hr />
                            <div className="icon">
                                <NavLink
                                    href="https://www.facebook.com/Manipur-Institute-of-Technology-134598873264194"
                                    target="blank"
                                    class="btn-facebook"
                                >
                                    <BsFacebook />
                                </NavLink>
                                <NavLink href="" class="btn-twitter">
                                    <BsTwitter />
                                </NavLink>
                            </div>
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
                                height="200"
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
