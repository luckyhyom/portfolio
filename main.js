"use strict";

const navbar = document.querySelector("#navbar");
const navbarheight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (scrollY > navbarheight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});
