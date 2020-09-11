import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import DestinationCard from "./DestinationCard";
import { MemoryRouter } from "react-router-dom";

describe("DestinationCard", () => {
  it("Should render a destination card", async () => {
    const mockSelectDestination = jest.fn();

    const { getByText, getAllByText } = render(
      <MemoryRouter>
        <DestinationCard
          id={9}
          name={"Sun"}
          type={"Star"}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkKZ8nFulIMZAK8MKI8kzvsfGnaa3YlqMMRA&usqp=CAU"
          }
          selectDestination={mockSelectDestination}
        />
      </MemoryRouter>
    );

    const destinationName = await waitFor(() => getByText("Sun"));
    const button = await waitFor(() => getByText("Plan My Voyage!"));

    expect(destinationName).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("Should be able to select a destination", async () => {
    const mockSelectDestination = jest.fn();

    const { getByText, getAllByText } = render(
      <MemoryRouter>
        <DestinationCard
          id={9}
          name={"Sun"}
          type={"Star"}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkKZ8nFulIMZAK8MKI8kzvsfGnaa3YlqMMRA&usqp=CAU"
          }
          selectDestination={mockSelectDestination}
        />
      </MemoryRouter>
    );

    const sun = await waitFor(() => getByText("Sun"));
    const button = await waitFor(() => getByText("Plan My Voyage!"));

    fireEvent.click(button);

    expect(mockSelectDestination).toHaveBeenCalledTimes(1);
  });
});
