import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Destinations from './Destinations';
import { MemoryRouter } from 'react-router-dom';
import { getAllCelestialBodies } from "../../ApiCalls";
import DestinationCard from '../DestinationCard/DestinationCard';

describe("Destinations", () => {
  let mockCelestialBodies;

  beforeEach(() => {
    mockCelestialBodies = [
      {
        "type": "Star",
        "gravity": 27.95,
        "id": 9,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkKZ8nFulIMZAK8MKI8kzvsfGnaa3YlqMMRA&usqp=CAU",
        "name": "Sun",
        "planet_day": 25.38,
        "planet_year": null
      },
      {
        "type": "Planet",
        "gravity": 0.37,
        "id": 1,
        "image": "https://cdn.mos.cms.futurecdn.net/GA4grWEsUYUqH58cDbRBw8.jpg",
        "name": "Mercury",
        "planet_day": 58.65,
        "planet_year": 87.96
    },
    {
        "type": "Planet",
        "gravity": 0.9,
        "id": 2,
        "image": "https://astronomy.com/-/media/Images/News%20and%20Observing/News/2020/04/Venus1__1_.jpg?mw=600",
        "name": "Venus",
        "planet_day": 243.02,
        "planet_year": 224.7
    },
    ]
  });

  it("Should display a carousel with destination options", async () => {
    const { getByText } = render(
      <MemoryRouter>
        <Destinations allCelestialBodies={ mockCelestialBodies }/>
      </MemoryRouter>
    );
    
    const sun = await waitFor(() => getByText("Sun"));
    const mercury = await waitFor(() => getByText("Mercury"));
    const venus = await waitFor(() => getByText("Venus"));

    expect(sun).toBeInTheDocument();
    expect(mercury).toBeInTheDocument();
    expect(venus).toBeInTheDocument();
  });
})