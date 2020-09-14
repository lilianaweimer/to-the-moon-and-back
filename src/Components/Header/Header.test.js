import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

describe("Header", () => {
  it("Should display the title of the application", () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const title = getByAltText("To the Moon & Back logo");

    expect(title).toBeInTheDocument();
  });
});
