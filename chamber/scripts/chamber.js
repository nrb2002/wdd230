const openButton = document.querySelector('#menuToggler');
const closeButton = document.querySelector('#closeMenu');
const menu = document.querySelector('#primaryMenu');

//Open toggler
openButton.addEventListener('click', () => {	
	menu.classList.toggle("show");
	openButton.style.display = 'none';
	closeButton.style.display = 'block';
});

//Close toggler
closeButton.addEventListener('click', () => {	
	menu.classList.toggle("show");
	openButton.style.display = 'block';	
	location.reload();
});
