import React, { useState } from "react";
import BoardingPass from "../BoardingPass/BoardingPass";
import "./Form.css";

const Form = () => {
  const [state, setState] = useState({
    numberOfDays: 0,
    numberOfTravelers: 0,
    travelers: [],
  });

  // const [travelers, setTravelers] = useState([]);

  const showTravelerForms = () => {
    console.log("state.numberOfTravelers", state.numberOfTravelers);

    let numOfTravelers = [];
    for (let i = 0; i < state.numberOfTravelers; i++) {
      numOfTravelers.push(i);
    }
    return numOfTravelers.map((currentTravelerNum) => {
      return (
        <BoardingPass
          travelerNumber={numOfTravelers.indexOf(currentTravelerNum)}
        />
      );
    });
  };

  const verifyUserInput = (value, stateProperty) => {
    if (value) {
      setState((state) => ({
        ...state,
        [stateProperty]: value,
      }));
    } else {
      setState((state) => ({
        ...state,
        [stateProperty]: 0,
      }));
    }
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
            onChange={(event) =>
              verifyUserInput(event.target.value, "numberOfDays")
            }
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
            onChange={(event) =>
              verifyUserInput(event.target.value, "numberOfTravelers")
            }
          >
            <option value={null}></option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
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
