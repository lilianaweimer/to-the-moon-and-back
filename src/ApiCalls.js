export const getAllCelestialBodies = async () => {
  const response = await fetch('https://fe-cors-proxy.herokuapp.com', {
        headers : {
          "Target-URL" : "https://moon-back-end.herokuapp.com/api/v1/celestial_bodies"
        }
      });
  const celestialBodies = await response.json();
  return celestialBodies.data;
}

export const getRecentNews = async () => {
  const response = await fetch('https://fe-cors-proxy.herokuapp.com', {
    headers : {
      "Target-URL" : 'https://moon-back-end.herokuapp.com/api/v1/news'
    }
  });
  const allNews = await response.json();
  const length = allNews.docs.length;
  const randomIndex = Math.floor(Math.random() * length);
  return allNews.docs[randomIndex];
}
