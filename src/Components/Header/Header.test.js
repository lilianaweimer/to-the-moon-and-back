import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

describe("Header", () => {
  it("Should display the logo of the application if the user is not traveling", () => {
    const { getByAltText, getByText } = render(
      <MemoryRouter>
        <Header isTraveling={false}/>
      </MemoryRouter>
    );

    const title = getByAltText("To the Moon & Back logo");

    expect(title).toBeInTheDocument();
  });

  it("Should display the logo of the application and a button if the user is traveling", () => {
    const { getByAltText, getByText } = render(
      <MemoryRouter>
        <Header isTraveling={true}/>
      </MemoryRouter>
    );

    const title = getByAltText("To the Moon & Back logo");
    const button = getByText("Take Me Back To Earth");

    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

});
