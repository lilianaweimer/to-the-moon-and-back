import React from 'react';
import { render } from '@testing-library/react';
import Weather from './Weather';
import { MemoryRouter } from 'react-router-dom';

describe("Weather", () => {
  it("Should render a fun fact about space", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Weather />
      </MemoryRouter>
    );

    const funFact = getByText("Most recent space", {exact: false});

    expect(funFact).toBeInTheDocument();
  });
})