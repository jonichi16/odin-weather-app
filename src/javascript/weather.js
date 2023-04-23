const getWeather = async (location) => {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=c8c89f0cbb4e432db7c181806232204&q=${location}`
  );
  const data = await response.json();
  return data;
};

export default getWeather;
