import 'regenerator-runtime';
import '../styles/responsive.scss';

import './restaurant-cards';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import './components/navigation-bar';
import './components/hero-section';
import './components/footer-bar';

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
