//Essas funções vão ficar em arquivos separados no futuro...
function openMenu() {
	const btnHamburger = document.querySelector('[data-openMenu]');
	const menu = document.querySelector('[data-menu]');

	btnHamburger.addEventListener('click', () => {
		btnHamburger.classList.toggle('active');
		menu.classList.toggle('active');
	});
}

function activeCard() {
	const btnPlus = document.querySelector('[data-active]');
	const cardEmployees = document.querySelector('[data-employees]');

	btnPlus.addEventListener('click', () => {
		cardEmployees.classList.toggle('active');
		btnPlus.classList.toggle('active');
	});
}

activeCard();
openMenu();
