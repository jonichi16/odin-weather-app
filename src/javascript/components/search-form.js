const formElement = document.createElement('form');
formElement.classList.add('form');
const inputText = document.createElement('input');
inputText.classList.add('search-input');
inputText.placeholder = 'Enter a city';
const searchButton = document.createElement('button');
searchButton.classList.add('search-btn');
searchButton.textContent = 'Search';

const createForm = () => {
  formElement.append(inputText, searchButton);
  return formElement;
};

const form = {
  createForm,
};

export default form;
