export function openMenu() {
	console.log('Funciounou');
	const btnHamburger = document.querySelector('.c-btn--hamburger');
	btnHamburger.addEventListener('click', () => {
		btnHamburger.classList.toggle('active');
	});
}
