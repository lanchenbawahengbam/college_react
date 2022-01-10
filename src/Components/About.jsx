import React from "react";
import { aboutItems } from "../db";
import { Container, Col } from "react-bootstrap";
import "./About.css";

const About = () => {
    return (
        <div className="page">
            <Container className="aboutpage">
                {aboutItems.map((data) => {
                    const {
                        welcomeTitle,
                        welcomeDesc,
                        visionTitle,
                        visionDesc,
                        missionTitle,
                        missionDesc,
                        takyelCampus,
                        takyelDesc,
                        muCampus,
                        muDesc,
                    } = data;
                    return (
                        <Col>
                            <br />
                            <h1>{welcomeTitle}</h1>
                            <hr />
                            <p>{welcomeDesc}</p>

                            <h2>{visionTitle}</h2>
                            <p>{visionDesc}</p>
                            <h2>{missionTitle}</h2>
                            <p>{missionDesc}</p>

                            <h2>{takyelCampus}</h2>
                            <p>{takyelDesc}</p>
                            <h2>{muCampus}</h2>
                            <p>{muDesc}</p>
                        </Col>
                    );
                })}
            </Container>
        </div>
    );
};

export default About;