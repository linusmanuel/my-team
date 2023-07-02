export function activeCard() {
	const btnPlus = document.querySelector('[data-active]');
	const cardEmployees = document.querySelector('[data-employees]');

	btnPlus.addEventListener('click', () => {
		cardEmployees.classList.toggle('active');
		btnPlus.classList.toggle('active');
	});
}
