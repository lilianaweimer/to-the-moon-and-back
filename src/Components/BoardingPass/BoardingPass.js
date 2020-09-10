import React, { useState } from "react";
import "./BoardingPass.scss";
import Rocket from "../../Images/rocket.svg";
import PurpleRocket from "../../Images/rocket_purple.svg";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;

const BoardingPass = ({ travelerNumber, storeTravelers }) => {
  console.log("travelerNumber", travelerNumber);

const handleChange = (value, travelerNum, property) => {
    storeTravelers(value, travelerNum, property);
  }

  return (
    <section className="cards_wrapper">
      <div className="card qr-theme">
        <div className="card_heading">
          <div className="card_logo">
            <img src={PurpleRocket} className="qatar" />
          </div>
          <div className="boarding-pass-image">
            <img src="https://cdn.mos.cms.futurecdn.net/GA4grWEsUYUqH58cDbRBw8.jpg" />
          </div>
          <div className="card_divider">
            <div className="divider_left divider_hole"></div>
            <div className="divider"></div>
            <div className="divider_right divider_hole"></div>
          </div>
          <h2 className="boardingPassH2">Boarding Pass</h2>
          <div className="inner"></div>
        </div>
        <div className="card_trip">
          <div className="trip_from">
            <h1 className="boardingPassH1">E</h1>
            <h2 className="boardingPassH2">Earth</h2>
          </div>
          <div className="trip_icon">
            <img src={Rocket} />
          </div>
          <div className="trip_to">
            <h1 className="boardingPassH1">SIN</h1>
            <h2 className="boardingPassH2">Singapore</h2>
          </div>
        </div>
        <div className="card_divider">
          <div className="divider_left divider_hole"></div>
          <div className="divider"></div>
          <div className="divider_right divider_hole"></div>
        </div>
        <div className="card_flight_details">
          <div className="card_seating">
            <h4>Traveler {Number(travelerNumber) + 1}</h4>
            <label>
              Name:
              <input
                className="traveler-info"
                autocomplete="off"
                type="text"
                name="name"
                placeholder="Name"
                required
                onChange={(event) => 
                  handleChange(event.target.value, travelerNumber, event.target.name)
                }
              />
            </label>
            <br />
            <label>
              Weight (lbs):
              <input
                className="traveler-info"
                autocomplete="off"
                min="0"
                type="number"
                name="weight"
                placeholder="Weight (lbs)"
                required
                onChange={(event) => 
                  handleChange(event.target.value, travelerNumber, event.target.name)
                }
              />
            </label>
            <br />
            <label>
              Age:
              <input
                className="traveler-info"
                autocomplete="off"
                min="0"
                type="number"
                name="age"
                placeholder="Age"
                required
                onChange={(event) => 
                  handleChange(event.target.value, travelerNumber, event.target.name)
                }
              />
            </label>
          </div>
          <div className="card_details">
            <div className="details_flight">
              <h2 className="boardingPassH2">Depart on</h2>
              <h3 className="boardingPassH3">{today}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardingPass;
