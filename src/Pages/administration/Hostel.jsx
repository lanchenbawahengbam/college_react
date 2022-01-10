import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { hostelData } from '../../db';
import "./Hostel.css";

const Hostel = () => {
    return (
        <div className="roothostel">
            <Container>
                <Row>
                    {hostelData.map((items) => {
                        const { header, name, details, disc, headerDisc, img } = items;
                        return (
                            <div className="hostel">
                                <h1>{header}</h1>
                                <h4>{headerDisc}</h4>
                                <hr />
                                <p>{disc}</p>
                                <div className="headerHostel">
                                    <img src={img} alt="hostel" />
                                    <h2>{name}</h2>
                                    <p>{details}</p>
                                </div>
                            </div>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Hostel
