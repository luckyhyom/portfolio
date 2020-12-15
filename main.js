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

  // document.querySelector(".homes").style.opacity = 1 - scrollY * 0.004;
  // document.querySelector(".arrow-up").style.opacity = 0 + scrollY * 0.004;
  // console.log(home.children);
  // console.log(home.scrollY);
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }

  navbarMenu.classList.remove("open");
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

// opacity구하는 법을 모르겠어
// document.querySelector(".homes").style.opacity = 0;
// children[0]~[3], 펼치면 상세보기됨 (새로운 구성요소가 보이는게 아님)

const home = document.querySelector(".home__container");
const home2 = document.querySelector("#home");
const home2Height = home2.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - scrollY / home2Height;
});

// const aboutMe = document.querySelector("#about>.contents-section");
// const aboutMeHeight = aboutMe.getBoundingClientRect().height;

// document.addEventListener("scroll", () => {
//   aboutMe.style.opacity = 1 - (scrollY - homeHeight) / aboutMeHeight;
// });

// show arrow-up
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > home2Height / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

arrowUp.addEventListener("click", () => {
  scrollIntoViews("#home");
});

const workButton = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

workButton.addEventListener("click", () => {
  const filter =
    event.target.dataset.filter || event.target.parentNode.dataset.filter;
  // undefined은 false와 비슷하다.

  //remove selection from thge precious item and select the new one

  const target =
    event.target.nodeName === "BUTTON" ? event.target : event.target.parentNode;

  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  document
    .querySelector(".category__btn.selected")
    .classList.remove("selected");
  target.classList.add("selected");

  projectContainer.classList.add("anim-out");

  // 전부다 타임아웃으로 묶어서 애니메이션아웃이 되기를 기다린다.
  // 그리고 0.3초후 웹브라우저에게 코드를 넘겨 코드 실행을 주문한다.
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);

  // 안보이는 옵션을 넣어줘야 하므로 타입이 다른 프로젝트에 invisible옵션을 추가한다.
  // 그 이유는, 프로젝트들의 기본값은 보이도록 설정되어있어야 하기 때문.
  // 그리고 filter === "*"  이것은, 문자열이 a여도 상관없다,
  // 애초에 프로젝트랑 비교하는게 아니라, 자기와 똑같은 값을 넣어서 올패스 하게 하는 코드다.

  // 반대로 생각해보자, 처음에 보여지는 것이 한정적이고 숨겨진게 훨씬 많을때
  // 즉 처음에 보여지는 것이 전체가 아닌 일부일때
  // 그럼 visible을 처음에 보여지는거에만 넣어놓고
  // 클릭시 타입이 같은것에 visible을 추가하고,
  // 타입이 다른 것에 visible을 삭제한다.

  // 컨텐츠가 아니라 컨텐츠를 담는 박스를 이용해 opacity효과를 줌
});

//모든 코드는 동기적으로 처리가 된다.
//그래서 클래스에서

// 카테고리 버튼 선택효과
// const catebtn = document.querySelector(".work__categories");
// const catebtn2 = document.querySelectorAll(".category__btn");
// catebtn.addEventListener("click", (e) => {
//   const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
//   console.log(filter);

//   catebtn2.forEach((catebtn3) => {
//     if (filter === catebtn3.dataset.filter) {
//       catebtn3.classList.add("selected");
//     } else {
//       catebtn3.classList.remove("selected");
//     }
//     // console.log(catebtn3.dataset.type);
//   });
// });

// 토글버튼

const toggleBtn = document.querySelector(".navbar__toggle");
toggleBtn.addEventListener("click", () => {
  const menu = document.querySelector(".navbar__menu");
  menu.classList.toggle("open");
});
