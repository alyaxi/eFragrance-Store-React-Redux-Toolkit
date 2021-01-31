import React, { useState } from 'react'
import Footer from '../Footers/Footer'
import CarouselSlider from "./Carousel"
import ProductCard from './ProductCard'
import Testimonial from './Testominial'

export default function Home() {
  
    return (
        <div>
            <CarouselSlider/>
            <ProductCard/>
            <Testimonial/>
            <Footer/>
        </div>
        
    )
}
