import { Button, Card, } from 'react-bootstrap'
import React from 'react'

const GridCard = ({ cardData }) => {

    return (
        <>
            {cardData.map((curElem) => {
                const { imgSrc, title, description } = curElem;
                return (
                    <>
                        <Card className="card-container" key={title}>
                            <Card.Img className="card-media" src={imgSrc} />
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">
                                    {title}
                                </Card.Title>
                                <Card.Text className="card-text">
                                    {description}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>

                    </>
                )
            })}
        </>
    )
}

export default GridCard
