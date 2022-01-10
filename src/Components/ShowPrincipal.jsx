import React from 'react'
import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import { principalData } from '../db';
import './ShowPrincipal.css';
import * as urlConst from '../Helper/constant';
import { useHistory } from 'react-router-dom';





const ShowPrincipal = () => {

    const history = useHistory();

    function handleButton(check) {
        switch (check) {
            case "principal":
                console.log("Principal Clicked");
                history.push(urlConst.PRINCIPAL)
                break;
            default:
                break;
        }
    }

    return (
        <div className="root">
            <Container>
                <Row>
                    {principalData.map((data) => {
                        const { img, disc, title, name } = data;
                        return (
                            <Col className="showCol">
                                <Image src={img} className="img" roundedCircle />
                                <div className="header">
                                    <h1>{title}</h1>
                                    <h2>{name}</h2>
                                    <p>{disc}</p>
                                    <Button variant="primary" onClick={() => handleButton("principal")}>Read More</Button>{' '}
                                </div>
                            </Col>
                        )
                    })}

                </Row>
            </Container>
        </div>
    )
}

export default ShowPrincipal;
