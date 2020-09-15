import React from "react";
import { render } from "@testing-library/react";
import PageNotFound from "./PageNotFound";
import { MemoryRouter } from "react-router-dom";

describe("PageNotFound", () => {
  it("Should display a message and a button", () => {
    const { getByText } = render(
      <MemoryRouter>
        <PageNotFound />
      </MemoryRouter>
    );

    const message = getByText("Sorry!", {exact: false});
    const button = getByText("Back To Home Page");

    expect(message).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});