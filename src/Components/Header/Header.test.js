import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

describe("Header", () => {
  it("Should display the title of the application", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const title = getByText("To The Moon And Back");

    expect(title).toBeInTheDocument();
  });
})