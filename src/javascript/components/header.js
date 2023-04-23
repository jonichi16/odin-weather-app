const headerElement = document.createElement('header');
headerElement.classList.add('header');
const logo = document.createElement('div');
logo.classList.add('logo');

const createHeader = (logoText) => {
  logo.textContent = logoText;

  headerElement.appendChild(logo);

  return headerElement;
};

const header = {
  createHeader,
};

export default header;
