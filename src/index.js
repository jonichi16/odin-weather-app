import './stylesheets/reset.css';
import './stylesheets/styles.css';
import getWeather from './javascript/weather';
import render from './javascript/components/dom';
import header from './javascript/components/header';
import main from './javascript/components/main';
import form from './javascript/components/search-form';
import weatherCard from './javascript/components/weather-card';
import footer from './javascript/components/footer';

const content = document.querySelector('.content');
const children = [
  header.createHeader('Today'),
  main.displayMain(form.createForm()),
  footer.createFooter(),
];
render(content, children);

const searchInput = document.querySelector('.search-input');
const searcButton = document.querySelector('.search-btn');

const displayWeather = async () => {
  const container = document.createElement('div');

  try {
    const weather = await getWeather(searchInput.value.toLowerCase());
    container.classList.add('weather');
    weatherCard.createWeatherCard(container, weather);
  } catch (e) {
    container.classList.add('error');
    container.textContent = 'Not Found';
  }

  main.displayMain(container);
};

searcButton.addEventListener('click', (e) => {
  e.preventDefault();

  displayWeather();

  searchInput.value = '';
});
