import React from "react";
import "./BoardingPass.scss";

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
            <h1 className="boardingPassH1">MIA</h1>
            <h2 className="boardingPassH2">Miami</h2>
          </div>
          <div className="trip_icon">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/553328/From.png" />
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
            <div className="seating_seat">
              <h2 className="boardingPassH2">Seat</h2>
              <h3 className="boardingPassH3">1A/1B</h3>
            </div>
          </div>
          <div className="card_details">
            <div className="details_flight">
              <h2 className="boardingPassH2">Depart on</h2>
              <h3 className="boardingPassH3">22 April, 16</h3>
            </div>
            <div className="details_date">
              <h2 className="boardingPassH2">Depart at</h2>
              <h3 className="boardingPassH3">20:30 pm</h3>
            </div>
            <div className="details_time">
              <h2 className="boardingPassH2">Departs in</h2>
              <h3 className="countdown">----</h3>
            </div>
          </div>
          <div className="card_details_continued">
            <div className="details_flight">
              <h2 className="boardingPassH2">Flight</h2>
              <h3 className="boardingPassH3">QR778</h3>
            </div>
            <div className="details_date">
              <h2 className="boardingPassH2">Confirmation </h2>
              <h3 className="boardingPassH3">b1ty45</h3>
            </div>
            <div className="details_time">
              <h2 className="boardingPassH2">Gate</h2>
              <h3 className="boardingPassH3">b12</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardingPass;
