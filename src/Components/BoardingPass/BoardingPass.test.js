import React from "react";
import { render, waitFor, fireEvent, getAllByPlaceholderText } from "@testing-library/react";
import BoardingPass from "./BoardingPass";
import { MemoryRouter } from "react-router-dom";

describe("BoardingPass", () => {
  let mockSelectedDestination;

  beforeEach(() => {
    mockSelectedDestination = {
      celestial_body_type: "Star",
      gravity: 27.95,
      id: 9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkKZ8nFulIMZAK8MKI8kzvsfGnaa3YlqMMRA&usqp=CAU",
      name: "Sun",
      planet_day: 25.38,
      planet_year: null,
    };
  });

  it("Should render a boarding pass", () => {
    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <BoardingPass 
          selectedDestination={ mockSelectedDestination }
        />
      </MemoryRouter>
    );

    const earth = getByText("Earth");
    const sun = getByText("Sun");
    const name = getByText("Name:");
    const nameInput = getByPlaceholderText("Name");
    const weight = getByText("Weight (lbs):");
    const weightInput = getByPlaceholderText("Weight (lbs)");
    const age = getByText("Age:");
    const ageInput = getByPlaceholderText("Age");

    expect(earth).toBeInTheDocument();
    expect(sun).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(weight).toBeInTheDocument();
    expect(weightInput).toBeInTheDocument();
    expect(age).toBeInTheDocument();
    expect(ageInput).toBeInTheDocument();


  });

  it("Should be able to fill out the boarding pass", () => {
    const mockStoreTravelers = jest.fn();
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <BoardingPass 
          selectedDestination={ mockSelectedDestination }
          storeTravelers={ mockStoreTravelers }
        />
      </MemoryRouter>
    );

    fireEvent.change(getByPlaceholderText("Name"), {target: {value: "Lili"}});
    fireEvent.change(getByPlaceholderText("Weight (lbs)"), {target: {value: "100"}});
    fireEvent.change(getByPlaceholderText("Age"), {target: {value: "23"}});

    expect(mockStoreTravelers).toHaveBeenCalledTimes(3);
  });
})