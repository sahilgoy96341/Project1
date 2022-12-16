import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {img1} from '../assets/image4.jpg';
import {img2} from '../assets/image5.jpg';
const Services = () => {
  return (
    <div>
      <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={5000} showThumbs={false}>
        <div>
            <img src={'img1'} alt="item1" />
            <p className='legend'>Full Stack</p>
        </div>
        <div>
            <img src={'img2'} alt="item2" />
            <p className='legend'>Peer-to-peer support</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Services
