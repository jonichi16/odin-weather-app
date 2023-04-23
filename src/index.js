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

// Home button
const logo = document.querySelector('.logo');
logo.addEventListener('click', () => {
  main.displayMain(form.createForm());
});

const searchInput = document.querySelector('.search-input');
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

const searcButton = document.querySelector('.search-btn');
searcButton.addEventListener('click', (e) => {
  e.preventDefault();

  displayWeather();

  const loading = document.createElement('div');
  loading.classList.add('loading');
  main.displayMain(loading);

  searchInput.value = '';
});
