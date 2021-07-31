import { Carousel } from 'react-bootstrap';
import React, { useState } from 'react'


const Home = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img className="imgSlider"
                        src="https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?cs=srgb&dl=pexels-cottonbro-4778611.jpg&fm=jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="imgSlider"
                        src="https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg?cs=srgb&dl=pexels-ivan-bertolazzi-2681319.jpg&fm=jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="imgSlider"
                        src="https://images.pexels.com/photos/3414792/pexels-photo-3414792.jpeg?cs=srgb&dl=pexels-theo-3414792.jpg&fm=jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>


        </>
    )
};

export default Home
