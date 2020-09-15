import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { getAllCelestialBodies, getRecentNews, getLandMarks } from "../../ApiCalls";
import { act } from "react-dom/test-utils";
jest.mock("../../ApiCalls");

describe("App", () => {
  let mockGetAllCelestialBodies;
  let mockGetRecentNews;
  let mockSunLandMarks;

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

    mockSunLandMarks = [
      {
        celestial_body_id: 9,
        description:
          "Deep in the sun's core is the beating heart of the entire solar system. It's hard to believe that so much is powered by a reaction on the atomic scale. Under pressure from the gravity of the sun being so massive, hydrogen atoms fuse into helium, providing the energy that lights up the entire solar system. It produces 1.8 billion times the energy of the largest nuclear bomb detonated on Earth... every single second!",
        id: 1,
        image:
          "https://cdn.mos.cms.futurecdn.net/WtnoFrpeLL37TLcjpzK5A7-970-80.jpg",
        landmark_type: "Structure",
        name: "Core",
      },
      {
        celestial_body_id: 9,
        description:
          "When you look up into the sky (but hopefully not directly!) the bright ball of the photosphere is the part of the sun you're looking at. Though often depicted as being yellow, the light from the sun is white. When it hits the Earth's atmosphere, a phenomenon called Rayleigh scattering causes it to look yellow, as well as the sky blue. The same phenomenon is responsible for the brilliant colors of both sunrises and sunsets.",
        id: 2,
        image:
          "https://astronomy.swin.edu.au/cms/cpg15x/albums/scaled_cache/897b42ce97bcd409a597f1392b2dd379-280x229.png",
        landmark_type: "Structure",
        name: "Photosphere",
      },
      {
        celestial_body_id: 9,
        description:
          "Just like the Earth, the sun also has an atmosphere. The largest part of it is known as its corona. Though it is not usually visible thanks to the brightness of the photosphere, during eclipses - when the moon's orbit puts it in the right place to block out the majority of the sun's light - it becomes readily apparent. Particles stream out of the corona to create solar wind, which is responsible for phenomena such as the auroras, and comets having tails, among others.",
        id: 3,
        image:
          "https://media.wired.com/photos/5e62e4af2ee19f000853234b/master/w_1600%2Cc_limit/photo_space_corona_1_AFRC2017-0233-006.jpg",
        landmark_type: "Atmosphere",
        name: "Corona",
      },
    ];
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

  it("Should be able to select a destination, fill out the form, and see the hyperspace animation", async () => {
    getAllCelestialBodies.mockResolvedValue(mockGetAllCelestialBodies);
    getLandMarks.mockResolvedValue(mockSunLandMarks);

    const { getByText, getByTestId, getByPlaceholderText, getByAltText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const destinationBtn = await waitFor(() => getByTestId("9"));

    fireEvent.click(destinationBtn);

    const daysInput = await waitFor(() => getByPlaceholderText("Earth Days"));
    const startVoyageBtn = await waitFor(() => getByText("Start My Voyage!"));

    act(() => {
      fireEvent.change(daysInput, { target: { value: "5" } });
      fireEvent.change(getByTestId("select"), { target: { value: 1 } });
    });

    const nameInput = await waitFor(() => getByPlaceholderText("Name"));
    const weightInput = await waitFor(() => getByPlaceholderText("Weight (lbs)"));
    const ageInput = await waitFor(() => getByPlaceholderText("Age"));

    fireEvent.change(nameInput, {target: { value: "Lili" }});
    fireEvent.change(weightInput, {target: { value: "100" }});
    fireEvent.change(ageInput, {target: { value: "23" }});

    act(() => {
      fireEvent.click(startVoyageBtn);
    });

    const rocket = getByAltText("a rocket flying through space");

    expect(rocket).toBeInTheDocument();
  });

  it.skip("Should be able to select a destination, fill out the form, and see the Landing site page", async () => {
    getAllCelestialBodies.mockResolvedValue(mockGetAllCelestialBodies);
    getLandMarks.mockResolvedValue(mockSunLandMarks);

    const { getByText, getByTestId, getByPlaceholderText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const destinationName = await waitFor(() => getByText("Sun"));
    const destinationBtn = await waitFor(() => getByTestId("9"));

    fireEvent.click(destinationBtn);

    const daysInput = await waitFor(() => getByPlaceholderText("Earth Days"));
    const startVoyageBtn = await waitFor(() => getByText("Start My Voyage!"));

    fireEvent.change(daysInput, { target: { value: "5" } });
    fireEvent.change(getByTestId("select"), { target: { value: 1 } });

    fireEvent.change(getByPlaceholderText("Name"), {
      target: { value: "Lili" },
    });
    fireEvent.change(getByPlaceholderText("Weight (lbs)"), {
      target: { value: "100" },
    });
    fireEvent.change(getByPlaceholderText("Age"), { target: { value: "23" } });

    fireEvent.click(startVoyageBtn);

    const backToEarthBtn = getByText("Take Me Back To Earth");
    const locationTitle = getByText("Location:", { exact: false });
    const PlanetDayTitle = getByText("Planet Day:", { exact: false });

    expect(backToEarthBtn).toBeInTheDocument();
    expect(locationTitle).toBeInTheDocument();
    expect(PlanetDayTitle).toBeInTheDocument();
  });
});
