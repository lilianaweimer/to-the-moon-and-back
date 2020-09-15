import React from "react";
import { render } from "@testing-library/react";
import Weather from "./Weather";
import { MemoryRouter } from "react-router-dom";

describe("Weather", () => {
  let mockArticle;

  beforeEach(() => {
    mockArticle = {
      _id: "5f60ff8496c53b1fb549820a",
      categories: [],
      date_added: 1599983564,
      date_published: 1600192276,
      events: [],
      featured: false,
      featured_image:
        "https://spacenews.com/wp-content/uploads/2014/12/sn-social.jpg",
      id: "",
      imported_date: "2020-09-13T07:52:44.713Z",
      launches: [],
      ll: [],
      news_site: "spacenews",
      news_site_long: "SpaceNews",
      published_date: "2020-09-15T17:51:16.000Z",
      tags: [],
      title: "is seeking experienced journalist to join our team",
      url:
        "https://spacenews.com/spacenews-is-seeking-experienced-journalist-to-join-our-team/",
    };
  });

  it("Should render a fun article about space", async () => {
    const { getByText } = render(
      <MemoryRouter>
        <Weather article={mockArticle} />
      </MemoryRouter>
    );

    const containerTitle = getByText("Recent Space News");
    const button = getByText("Learn More");
    const articleTitle = getByText("is seeking", {exact: false});

    expect(containerTitle).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(articleTitle).toBeInTheDocument();
  });
});
