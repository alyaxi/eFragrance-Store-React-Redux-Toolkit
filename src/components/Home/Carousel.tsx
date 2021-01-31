import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap'
export default function CarouselSlider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: React.SetStateAction<number>, e: any) => {
      setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://post.healthline.com/wp-content/uploads/2019/05/Perfume_Bottles-1200x628-Facebook.jpg"
            alt="First slide"
            width="100%"
            height="500px"
          />
          <Carousel.Caption>
          <h3>Valentine Day Special</h3>
            <p>
            BRING JOY THIS VALENTINE'S DAY
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.fragrancex.com/blog/wp-content/uploads/2020/04/most-expensive-perfumes-hero.jpg"
            alt="Second slide"
            width="100%"
            height="500px"
            
          />
  
          <Carousel.Caption>
            <h3>Top Brands </h3>
            <p>DIVERSE VARIETY OF PERFUMES FROM THE TOP BRANDS</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/1491/3294/files/WebBanner-Generic_4cd6b563-32c5-4dff-b6a3-0202ec21b5da_1600x.jpg?v=1610576667"
            alt="Third slide"
            width="100%"
            height="500px"
          />
  
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
    )
}
