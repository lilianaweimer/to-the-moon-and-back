import React from "react";
import { render } from "@testing-library/react";
import ThankYou from "./ThankYou";
import { MemoryRouter } from "react-router-dom";

describe("ThankYou", () => {
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

  it("Should display a hyperspace animation if there is a selected destination", () => {
    const mockSetTravelingState = jest.fn();

    const { getByAltText } = render(
      <MemoryRouter>
        <ThankYou 
          selectedDestination={mockSelectedDestination}
          setTravelingState={mockSetTravelingState}
        />
      </MemoryRouter>
    );

    const rocket = getByAltText("a rocket flying through space");

    expect(rocket).toBeInTheDocument();
  })

  it.skip("Should display a rocket image, thank you message, and a button, if there is a selected destination and after the hyperspace animation has finished", () => {
    const mockSetTravelingState = jest.fn();

    const { getByText, getByAltText } = render(
      <MemoryRouter>
        <ThankYou 
          selectedDestination={mockSelectedDestination}
          setTravelingState={mockSetTravelingState}
        />
      </MemoryRouter>
    );
    
    const rocket = getByAltText("rocket");
    const message = getByText("Thank you for", {exact: false});
    const button = getByText("Go On Another Voyage");

    expect(rocket).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(button).toBeInTheDocument();

  });
});