import React, { useState, useEffect } from "react";
import "./LandingSite.css";
import { getLandMarks } from "../../ApiCalls";
import Hyperspace from "../Hyperspace/Hyperspace";
import PassengerChart from "../Charts/PassengerChart";
import { Redirect } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LandingSite = ({
  setTravelingState,
  destination,
  passengers,
  tripDays,
}) => {
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
    lazyLoad: "ondemand",
    arrows: false,
    draggable: true,
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

  return destination.id ? (
    isInHyperspace ? (
      <Hyperspace />
    ) : (
      <div className="landing-container">
        <div className="landing-img-info">
          <img
            className="destination-landing-img"
            src={destination.background_image}
            alt="destination"
          />
          <section className="destination-info-container">
            <div className="grid">
              <div className="div1">
                <article>
                  <p>
                    <span className="Welcome-to-planet-text">
                      Welcome to {destination.name.toUpperCase()}
                    </span>
                  </p>
                  <p>{destination.celestial_body_type.toUpperCase()}</p>
                </article>
                <article>
                  <p>
                    {`You are now ${numberTransform(
                      Math.ceil(destination.travel.distance)
                    )} miles
                    from Earth.`}
                  </p>
                  <p>
                    {`It took you ${numberTransform(
                      Math.ceil(destination.travel.travel_time / 24)
                    )} days to get to ${destination.name} traveling at ${numberTransform(
                      Math.ceil(
                        destination.travel.distance /
                          destination.travel.travel_time
                      )
                    )} miles per hour!`}
                  </p>
                  <hr className='landing-hr' />
                  <h5>Gravity</h5>
                  <p>{destination.gravity}G</p>
                  <p>That is {(destination.gravity * 100).toFixed(0)}% of Earth's gravity!</p>
                </article>
              </div>
              <div className="div2 land-marks-container">
                <h3 className="land-marks-title">Landmarks</h3>
                <Slider {...settings}>{displayLandMarks()}</Slider>
              </div>
              <div className="div3">
                <h3>Your visit in Earth time</h3>
                <p>{tripDays} days</p>
                <hr className='landing-hr' />
                <h3>Your visit in {destination.name} time</h3>
                <p>{(tripDays / destination.planet_day).toFixed(1)} days</p>
                {destination.planet_year && (
                  <p>{(tripDays / destination.planet_year).toFixed(1)} years</p>
                )}
                <hr className='landing-hr' />
                <p>
                  One day on {destination.name} is {destination.planet_day} days
                  on Earth.
                </p>
                {destination.planet_year && (
                  <p>
                    One year on {destination.name} is {destination.planet_year}{" "}
                    days on Earth.
                  </p>
                )}
              </div>
              <div className="div4">
                <p className="trav-info-title">Traveler Information</p>
                {displayPassengerInfo()}
              </div>
              <div className="div5">
                <span className='window-span'>
                  Your view from crew quarters.
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  ) : (
    <Redirect to="/" />
  );
};

export default LandingSite;
