import React from "react";
import { render } from "@testing-library/react";
import Background from "./Background";
import { MemoryRouter } from "react-router-dom";

describe("Background", () => {
  it("Should render", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Background />
      </MemoryRouter>
    );

    const stars = getByTestId("star-div");

    expect(stars).toBeInTheDocument();
  })
})