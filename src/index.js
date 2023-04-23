import './stylesheets/reset.css';
import './stylesheets/styles.css';
import render from './javascript/components/dom';
import header from './javascript/components/header';
import main from './javascript/components/main';
import form from './javascript/components/search-form';

const content = document.querySelector('.content');
const children = [
  header.createHeader('Today'),
  main.displayMain(form.createForm()),
];
render(content, children);
