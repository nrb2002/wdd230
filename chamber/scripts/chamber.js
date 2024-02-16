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

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
