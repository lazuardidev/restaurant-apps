import 'regenerator-runtime';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import './components/header/header-bar';
import './components/footer/footer-bar';
import './components/hero/hero';

import '../styles/index.scss';

import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
    button: document.querySelector('#menu'),
    drawer: document.querySelector('#navigationDrawer'),
    content: document.querySelector('#mainContent')
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});

const menuButton = document.querySelector('#menu');
const body = document.querySelector('body');
const navList = document.querySelector('ul.nav_list');

menuButton.addEventListener('click', (event) => {
	navList.classList.toggle('show');
	event.stopPropagation();
});

body.addEventListener('click', (event) => {
	navList.classList.remove('show');
	event.stopPropagation();
});
