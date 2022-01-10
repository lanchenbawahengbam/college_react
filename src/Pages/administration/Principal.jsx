import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap';
import { principalData } from '../../db';
import "./Principal.css";

const Principal = () => {
    return (
        <div className="principalRoot">
            <Container>
                <Row>
                    {principalData.map((data) => {
                        const { img, discription, title, name } = data;
                        return (
                            <Col>
                                <Image src={img} className="principalImg" thumbnail />
                                <div className="principalHeader">
                                    <h1>{title}</h1>
                                    <h2>{name}</h2>
                                    <p>{discription}</p>
                                </div>
                            </Col>
                        )
                    })}

                </Row>
            </Container>
        </div>
    )
}

export default Principal
