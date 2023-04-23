// import { openMenu } from '/components/OpenMenu.js';

function openMenu() {
	const btnHamburger = document.querySelector('.c-btn--hamburger');
	const menu = document.querySelector('.c-menu__navigation');

	btnHamburger.addEventListener('click', () => {
		btnHamburger.classList.toggle('active');
		menu.classList.toggle('active');
	});
}

openMenu();
