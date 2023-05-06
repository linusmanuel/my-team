// import { openMenu } from '/components/OpenMenu.js';

function openMenu() {
	const btnHamburger = document.querySelector('[data-openMenu]');
	const menu = document.querySelector('[data-menu]');

	btnHamburger.addEventListener('click', () => {
		btnHamburger.classList.toggle('active');
		menu.classList.toggle('active');
	});
}

openMenu();
