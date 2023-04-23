const footerElement = document.createElement('footer');
footerElement.classList.add('footer');
const content = document.createElement('p');
content.classList.add('created-by');
content.textContent = 'Created by: ';
const link = document.createElement('a');
link.classList.add('github-link');
link.href = 'https://github.com/jonichi16/odin-weather-app';
link.textContent = 'jonichi';

const createFooter = () => {
  content.appendChild(link);
  footerElement.appendChild(content);

  return footerElement;
};

const footer = {
  createFooter,
};

export default footer;
