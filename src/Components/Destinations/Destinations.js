import React, { useState }  from 'react';
import './Destinations.css';
import Slider from "react-slick";
import DestinationCard from '../DestinationCard/DestinationCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Destinations() {
  const settings = {
    // className: "center",
    centerMode: true,
    centerPadding: '0',
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
  };

  return (
    <div className='destinations'>
      <Slider  {...settings}>
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
      </Slider>
    </div>
    
  )
}

export default Destinations;