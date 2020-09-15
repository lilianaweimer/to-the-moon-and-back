import React, { useState, useEffect } from "react";
import "./LandingSite.css";
import { getLandMarks } from "../../ApiCalls";
import Hyperspace from "../Hyperspace/Hyperspace";
import PassengerChart from "../Charts/PassengerChart";
import { Redirect } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LandingSite = ({ setTravelingState, destination, passengers }) => {
  const [isInHyperspace, toggleHyperspace] = useState(true);
  const [landMarks, setLandMarks] = useState([]);

  const names = [];
  const earthWeights = [];
  const destinationWeights = [];
  const earthAges = [];
  const destinationAges = [];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    centerPadding: "50px",
    variabkeWidth: true,
    lazyLoad: "ondemand",
  };

  const displayLandMarks = () => {
    return landMarks.map((mark) => {
      return (
        <div key={mark.id} className="land-mark-card">
          <p className="land-mark-name">{mark.name}</p>
          <p className="land-mark-type">{mark.landmark_type}</p>
          <img src={mark.image} className="land-mark-image" alt={mark.name} />
          <p className="land-mark-description">{mark.description}</p>
        </div>
      );
    });
  };

  const displayPassengerInfo = () => {
    passengers.forEach((passenger) => {
      names.push(passenger.name);
      earthAges.push(Number(passenger.age));
      destinationAges.push(
        Math.floor(
          Number(passenger.age) + destination.travel.travel_time / 8760
        )
      );
      earthWeights.push(Number(passenger.weight));
      destinationWeights.push(
        Math.floor(Number(passenger.weight) * Number(destination.gravity))
      );
    });

    return (
      <div className="charts-container">
        <PassengerChart
          names={names}
          earthWeights={earthWeights}
          destinationWeights={destinationWeights}
          earthAges={earthAges}
          destinationAges={destinationAges}
          destination={destination.name}
        />
      </div>
    );
  };

  const displayDestinationInfo = () => {
    return (
      <div className="">
        <p>Location: {destination.name}</p>
        <p>Location Type: {destination.celestial_body_type}</p>
        <p>Gravity: {destination.gravity}ɡ</p>
        <p>Planet Day: {destination.planet_day}</p>
        {destination.planet_year && (
          <p>Planet Year: {destination.planet_year}</p>
        )}
        <p>
          Travel Distance:{" "}
          {numberTransform(Math.ceil(destination.travel.distance))} Miles
        </p>
        <p>
          Travel Time:{" "}
          {numberTransform(Math.ceil(destination.travel.travel_time))} Hrs
        </p>
      </div>
    );
  };

  const numberTransform = (n) => {
    return String(n).replace(/(.)(?=(\d{3})+$)/g, "$1,");
  };

  useEffect(() => {
    const grabLandMarks = () => {
      getLandMarks(destination.id).then((data) => setLandMarks(data));
    };
    grabLandMarks();
  }, [destination.id]);

  useEffect(() => {
    setTravelingState(true);
  }, [setTravelingState]);

  useEffect(() => {
    const timer = setTimeout(() => toggleHyperspace(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  console.log(landMarks);

  return destination.id ? (
    isInHyperspace ? (
      <Hyperspace />
    ) : (
      <div className="landing-container">
        <div className="landing-img-info">
          <img
            className="destination-landing-img"
            src="https://res.cloudinary.com/dk-find-out/image/upload/q_80,h_800,f_auto/Nasa_Hi-res_neptune_despina_transit_combo_despinabrightened_usbm0u.jpg"
            alt="destination"
          />
          <section className="destination-info-container">
            {displayDestinationInfo()}
          </section>
          <section className="traveler-info-container">
            <p className="trav-info-title">Traveler Information</p>
            {displayPassengerInfo()}
          </section>
        </div>
        <div className="land-marks-container">
          <h3 className="land-marks-title">Landmarks</h3>
          <Slider {...settings}>{displayLandMarks()}</Slider>
        </div>
      </div>
    )
  ) : (
    <Redirect to="/" />
  );
};

export default LandingSite;
