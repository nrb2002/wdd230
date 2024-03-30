'use strict';


const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const menuToggler = document.querySelector(".toggle-menu");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleAction = function () {
  menuToggler.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

menuToggler.addEventListener("click", toggleAction);
overlay.addEventListener("click", toggleAction);

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", toggleAction);
}



/**
 * header active on scroll
 */

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  window.scrollY >= 10 ? header.classList.add("active")
    : header.classList.remove("active");
});