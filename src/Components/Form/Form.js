import React, { useState } from "react";
import BoardingPass from "../BoardingPass/BoardingPass";
import "./Form.css";

const Form = () => {
  const [days, setDays] = useState("");
  const [travelerCount, setTravelerCount] = useState("");
  // const [travelers, setTravelers] = useState([]);

  const showTravelerForms = () => {
    console.log(days);
    let numOfTravelers = [];
    for (let i = 0; i < travelerCount; i++) {
      numOfTravelers.push(i);
    }
    return numOfTravelers.map((currentTravelerNum) => {
      return <BoardingPass />;
      // return (
      //   <div key={dumpsterNum}>
      //     <h4>Traveler {dumpsterNum + 1}</h4>
      //     <label>
      //       Name:
      //       <input
      //         type="text"
      //         name="name"
      //         placeholder="Name"
      //         required
      //         onChange={() => {}}
      //       />
      //     </label>
      //     <br />
      //     <label>
      //       Weight (lbs):
      //       <input
      //         type="text"
      //         name="weight"
      //         placeholder="Weight (lbs)"
      //         required
      //         onChange={() => {}}
      //       />
      //     </label>
      //     <br />
      //     <label>
      //       Age:
      //       <input
      //         type="text"
      //         name="age"
      //         placeholder="Age"
      //         required
      //         onChange={() => {}}
      //       />
      //     </label>
      //     <hr />
      //   </div>
      // );
    });
  };

  return (
    <fieldset className="form-container">
      <legend>Voyage Planner:</legend>
      <form className="booking-form">
        <label>
          How many Earth days do you want to spend at [destination]?
          <br />
          <input
            type="number"
            placeholder="Earth Days"
            name="days"
            required
            onChange={(event) => setDays(event.target.value)}
          />
        </label>
        <br />
        <label>
          How many people will be on your voyage?
          <br />
          <select
            alt="Number of Travelers"
            name="traveler-count"
            className="dropdown"
            required
            onChange={(event) => setTravelerCount(event.target.value)}
          >
            <option value={null}></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <div className="boarding-pass-container">{showTravelerForms()}</div>
        <br />
        <button type="submit" className="form-button">
          Start My Voyage!
        </button>
      </form>
    </fieldset>
  );
};

export default Form;
