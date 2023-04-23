const mainElement = document.createElement('main');
mainElement.classList.add('main');

const displayMain = (child) => {
  mainElement.textContent = '';

  mainElement.append(child);

  return mainElement;
};

const main = {
  displayMain,
};

export default main;
