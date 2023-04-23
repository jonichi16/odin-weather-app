import './stylesheets/reset.css';
import render from './javascript/components/dom';
import header from './javascript/components/header';

const content = document.querySelector('.content');
const children = [header.createHeader('Today')];
render(content, children);
