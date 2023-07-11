const buttonsPlus = document.querySelectorAll('[data-active]');

buttonsPlus.forEach((button) => {
	button.addEventListener('click', (event) => {
		const card = event.target.parentNode;
		activeCard(card);
		activeCard(event.target);
	});
});

function activeCard(card) {
	card.classList.toggle('active');
}

export { activeCard };
