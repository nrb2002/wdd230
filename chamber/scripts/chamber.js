const open = document.querySelector('#menuToggler');
const close = document.querySelector('#closeMenu');
const menu = document.querySelector('#primaryMenu');


//Open toggler
open.addEventListener('click', () => {	
	menu.classList.toggle("show");
	open.classList.toggle("hide");
	close.classList.toggle("show");
});

//Close toggler
close.addEventListener('click', () => {	
	menu.classList.toggle("show");
	open.classList.toggle("hide");
	close.classList.toggle("show");
});
