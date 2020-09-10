import React from "react";
import "./BoardingPass.scss";
import Rocket from "../../Images/rocket.svg";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;

const BoardingPass = () => {
  return (
    <section className="cards_wrapper">
      <div className="card qr-theme">
        <div className="card_heading">
          <div className="card_logo">
            <img
              src="http://logok.org/wp-content/uploads/2015/03/Qatar-Airways-logo-logotype-1024x768.png"
              className="qatar"
            />
          </div>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/281813/SIN.jpg" />
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
            <div className="seating_passenger">
              <h2 className="boardingPassH2">Passenger</h2>
              <h3 className="boardingPassH3">Deven Blackburn</h3>
            </div>
            <div className="seating_passenger_dos">
              <h2 className="boardingPassH2">Passenger</h2>
              <h3 className="boardingPassH3">Leonardo Restrepo</h3>
            </div>
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
