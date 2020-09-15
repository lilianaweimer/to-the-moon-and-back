import React from "react";
import { render } from "@testing-library/react";
import Loading from "./Loading";
import { MemoryRouter } from "react-router-dom";

describe("Loading", () => {
  it("Should tell the user that the page is loading", () => {
    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <Loading />
      </MemoryRouter>
    );

    const title = getByText("Loading...");
    const rocket = getByTestId("rocket-animation");

    expect(title).toBeInTheDocument();
    expect(rocket).toBeInTheDocument();
  })
});