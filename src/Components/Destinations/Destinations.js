import React  from 'react';
import './Destinations.css';
import Slider from "react-slick";
import DestinationCard from '../DestinationCard/DestinationCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Destinations( { allCelestialBodies, selectDestination } ) {
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
          type={body.celestial_body_type}
          image={body.image}
          selectDestination={ selectDestination }
          key={ body.id }
        />
      )  
    })
  }

  return (
    <div className='destinations'>
      <h3 className='destinations-title'>Voyage Destinations</h3>
      <Slider  {...settings}>
       {getDestinations()}
      </Slider>
    </div>
    
  )
}

export default Destinations;