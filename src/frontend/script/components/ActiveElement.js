const buttonsPlus = document.querySelectorAll('[data-active]');

buttonsPlus.forEach((button) => {
	button.addEventListener('click', (event) => {
		const card = event.target.parentNode;
		const button = event.target;
		const selectors = [card, button];

		activeElement(selectors);
	});
});

function activeElement(selectors = []) {
	selectors.forEach((selector) => {
		selector.classList.toggle('active');
	});
}

export { activeElement };
