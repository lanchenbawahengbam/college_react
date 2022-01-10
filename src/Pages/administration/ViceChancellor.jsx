import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap';
import { vcDatas } from '../../db';
import "./ViceChancellor.css";

const ViceChancellor = () => {
    return (
        <div className="vcRoot">
            <Container>
                <Row>
                    {vcDatas.map((data) => {
                        const { img, disc, title, name } = data;
                        return (
                            <Col>
                                <Image src={img} className="vcImg" thumbnail />
                                <div className="vcHeader">
                                    <h1>{title}</h1>
                                    <h2>{name}</h2>
                                    <p>{disc}</p>
                                </div>
                            </Col>
                        )
                    })}

                </Row>
            </Container>
        </div>
    )
}

export default ViceChancellor;

