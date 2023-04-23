import './stylesheets/reset.css';
import './stylesheets/styles.css';
import render from './javascript/components/dom';
import header from './javascript/components/header';
import main from './javascript/components/main';
import form from './javascript/components/search-form';
import footer from './javascript/components/footer';

const content = document.querySelector('.content');
const children = [
  header.createHeader('Today'),
  main.displayMain(form.createForm()),
  footer.createFooter(),
];
render(content, children);
