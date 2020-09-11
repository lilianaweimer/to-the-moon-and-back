export const getAllCelestialBodies = async () => {
  const response = await fetch('https://fe-cors-proxy.herokuapp.com', {
        headers : {
          "Target-URL" : "https://moon-back-end.herokuapp.com/api/v1/celestial_bodies"
        }
      });
  const celestialBodies = await response.json();
  return celestialBodies.data;
}
