import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  getByTestId,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { getAllCelestialBodies, getRecentNews } from "../../ApiCalls";
jest.mock("../../ApiCalls");

describe("App", () => {
  let mockGetAllCelestialBodies;
  let mockGetRecentNews;

  beforeEach(() => {
    mockGetAllCelestialBodies = [
      {
        celestial_body_type: "Star",
        gravity: 27.95,
        id: 9,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkKZ8nFulIMZAK8MKI8kzvsfGnaa3YlqMMRA&usqp=CAU",
        name: "Sun",
        planet_day: 25.38,
        planet_year: null,
      },
      {
        celestial_body_type: "Planet",
        gravity: 0.37,
        id: 1,
        image: "https://cdn.mos.cms.futurecdn.net/GA4grWEsUYUqH58cDbRBw8.jpg",
        name: "Mercury",
        planet_day: 58.65,
        planet_year: 87.96,
      },
      {
        celestial_body_type: "Planet",
        gravity: 0.9,
        id: 2,
        image:
          "https://astronomy.com/-/media/Images/News%20and%20Observing/News/2020/04/Venus1__1_.jpg?mw=600",
        name: "Venus",
        planet_day: 243.02,
        planet_year: 224.7,
      },
    ];

    mockGetRecentNews = {
      _id: "5f5ca11c96c53b1fb5fe7fdd",
      featured_image:
        "https://spacenews.com/wp-content/uploads/2020/05/KZ-1A-Xingyun2-0102-launch-expace-12may2020-879x485.jpg",
      published_date: "2020-09-12T10:11:17.000Z",
      title: "Chinese Kuaizhou-1A rocket launch ends in failure",
      url:
        "https://spacenews.com/chinese-kuaizhou-1a-rocket-launch-ends-in-failure/",
    };
  });

  it("Should first render a header, space article, and a carousel with a couple of destinations", async () => {
    getAllCelestialBodies.mockResolvedValue(mockGetAllCelestialBodies);
    getRecentNews.mockResolvedValue(mockGetRecentNews);

    const { getByText, getByAltText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const header = await waitFor(() => getByAltText("To the Moon & Back logo"));
    const newsTitle = await waitFor(() =>
      getByText("Chinese Kuaizhou-1A", { exact: false })
    );
    const newsDate = await waitFor(() => getByText("09/12/2020"));
    const destinationName = await waitFor(() => getByText("Sun"));

    expect(header).toBeInTheDocument();
    expect(newsTitle).toBeInTheDocument();
    expect(newsDate).toBeInTheDocument();
    expect(destinationName).toBeInTheDocument();
  });

  it.skip("Should be able to click on the learn more button and be redirected to a new page showing the article", async () => {
    getRecentNews.mockResolvedValue(mockGetRecentNews);

    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const learnMoreBtn = await waitFor(() => getByText("Learn More"));
    const mockBtnClick = jest.fn();

    fireEvent.click(learnMoreBtn);

    expect(mockBtnClick).toHaveBeenCalledTimes(1);
  });

  it("Should be able to select a destination and then be brought to the voyage planner page", async () => {
    const { getByText, getByTestId, getByPlaceholderText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const destinationName = await waitFor(() => getByText("Sun"));
    const button = await waitFor(() => getByTestId("9"));

    fireEvent.click(button);

    const title = await waitFor(() => getByText("Voyage Planner"));
    const howManyDays = await waitFor(() =>
      getByText("How many Earth days", { exact: false })
    );
    const daysInput = await waitFor(() => getByPlaceholderText("Earth Days"));
    const howManyPeople = await waitFor(() =>
      getByText("How many people will", { exact: false })
    );
    const startVoyageBtn = await waitFor(() => getByText("Start My Voyage!"));

    expect(title).toBeInTheDocument();
    expect(howManyDays).toBeInTheDocument();
    expect(daysInput).toBeInTheDocument();
    expect(howManyPeople).toBeInTheDocument();
    expect(startVoyageBtn).toBeInTheDocument();
    expect(destinationName).not.toBeInTheDocument();
  });
});
