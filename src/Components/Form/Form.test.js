import React from "react";
import { render, waitFor, fireEvent, getAllByPlaceholderText } from "@testing-library/react";
import Form from "./Form";
import { MemoryRouter } from "react-router-dom";
jest.mock("../../apiCalls");

describe("Form", () => {
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

  it("Should start off by just rendering a title of the form, two questions, two inputs, and a button", () => {
    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <Form selectedDestination={mockSelectedDestination} />
      </MemoryRouter>
    );

    const title = getByText("Voyage Planner");
    const howManyDays = getByText("How many Earth days", { exact: false });
    const daysInput = getByPlaceholderText("Earth Days");
    const howManyPeople = getByText("How many people will", { exact: false });
    const button = getByText("Start My Voyage!");

    expect(title).toBeInTheDocument();
    expect(howManyDays).toBeInTheDocument();
    expect(howManyPeople).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(daysInput).toBeInTheDocument();
  });

  it("Should render the correct number of boarding passes when the user clicks the select drop down", () => {
    const { getAllByText, getByTestId } = render(
      <MemoryRouter>
        <Form selectedDestination={mockSelectedDestination} />
      </MemoryRouter>
    );

    fireEvent.change(getByTestId("select"), { target: {value: 2}});

    expect(getAllByText("Boarding Pass").length).toBe(2);
  });

  it("Should only be able to select up to 5 people to go on the voyage", () => {
    const { queryByText, getByTestId } = render(
      <MemoryRouter>
        <Form selectedDestination={mockSelectedDestination} />
      </MemoryRouter>
    );

    fireEvent.change(getByTestId("select"), { target: {value: 6}});

    expect(queryByText("Boarding Pass")).not.toBeInTheDocument();
    });
});
