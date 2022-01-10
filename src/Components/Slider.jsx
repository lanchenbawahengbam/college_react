import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Slider.css";
import { sliderItems } from '../db';

const Slider = () => {
    return (
        < Carousel >
            {
                sliderItems.map((item) => {
                    const { img, title } = item;
                    return (
                        <Carousel.Item interval={2500} >
                            <img
                                className="imgSlider"
                                src={img}
                                alt="Mit"
                            />
                            <Carousel.Caption className="carouselCaption">
                                <h3>{title}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
            }
        </Carousel >
    )
}

export default Slider
