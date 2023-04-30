export function openMenu() {
	const btnHamburger = document.querySelector('[data-openMenu]');
	btnHamburger.addEventListener('click', () => {
		btnHamburger.classList.toggle('active');
	});
}
