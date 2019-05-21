import React, { Component } from 'react'
import { Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

class Slider extends Component {
    render() {
        const images = [
            "assets/images/products/1.jpg",
            "assets/images/products/2.jpg",
            "assets/images/products/3.jpg",
            "assets/images/products/4.jpg",
            "assets/images/products/5.jpg",
            "assets/images/products/6.jpg",
            // "assets/images/products/7.jpg"
        ];

        const cards = images.map((image, index) => {
            return (
                <div key={'image-' + index} className="carousel-image-wrapper">
                    <img alt="" src={image} />
                </div>
            )
        });

        return <Carousel showArrows={true}>{cards}</Carousel>
    }
}

export default Slider