import React from 'react';
import { render } from '@testing-library/react';
import Weather from './Weather';
import { MemoryRouter } from 'react-router-dom';

describe("Weather", () => {
  it("Should render a fun fact about space", async () => {
    const { getByText } = render(
      <MemoryRouter>
        <Weather article={{}}/>
      </MemoryRouter>
    );

    const funFact = getByText("Recent Space News");

    expect(funFact).toBeInTheDocument();
  });
})