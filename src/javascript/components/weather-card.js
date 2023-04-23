const city = document.createElement('h2');
city.classList.add('city');
const condition = document.createElement('p');
condition.classList.add('condition');
const icon = document.createElement('img');
icon.classList.add('icon');
const temperature = document.createElement('p');
temperature.classList.add('temp');

const createWeatherCard = (container, weather) => {
  city.textContent = `${weather.location.name}, ${weather.location.country}`;
  condition.textContent = weather.current.condition.text;
  icon.src = weather.current.condition.icon;
  temperature.textContent = weather.current.temp_c;

  container.append(city, condition, icon, temperature);
};

const weatherCard = {
  createWeatherCard,
};

export default weatherCard;
