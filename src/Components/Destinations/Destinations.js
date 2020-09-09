import React, { useState }  from 'react';
import './Destinations.css';
import Slider from "react-slick";
import DestinationCard from '../DestinationCard/DestinationCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Destinations( { allCelestialBodies } ) {
  const settings = {
    centerMode: true,
    centerPadding: '0',
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
  };

  const getDestinations = () => {
    return allCelestialBodies.map(body => {
      return (
        <DestinationCard 
        id={body.id}
        name={body.name}
        type={body.type}
        image={body.image}
      />
      )  
    })
  }

  return (
    <div className='destinations'>
      <Slider  {...settings}>
       {getDestinations()}
      </Slider>
    </div>
    
  )
}

export default Destinations;