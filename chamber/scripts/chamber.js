/**Hamburger Menu */
const open = document.querySelector('#menuToggler');
const close = document.querySelector('#closeMenu');
const menu = document.querySelector('#primaryMenu');

//Open menu toggler
open.addEventListener('click', () => {	
	menu.classList.toggle("show");
	open.classList.toggle("hide");
	close.classList.toggle("show");
});

//Close menu toggler
close.addEventListener('click', () => {	
	menu.classList.toggle("show");
	open.classList.toggle("hide");
	close.classList.toggle("show");
});
/**Hamburger Menu */



/**Accordion behavior*/
const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
/**Accordion behavior*/
