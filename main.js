"use strict";

//Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarheight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (scrollY > navbarheight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }

  scrollIntoViews(`${link}`);
});

// Move to Contact when Click contact me btn
const contactbtn = document.querySelector(".home__contact");
contactbtn.addEventListener("click", () => {
  scrollIntoViews("#contact");
});

function scrollIntoViews(asd) {
  document.querySelector(asd).scrollIntoView({ behavior: "smooth" });
}

function change() {
  document.querySelector("#about").outerHTML += "Good";
}
