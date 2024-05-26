// HEADER-NAV - social hover
const socialLink = document.querySelector(".header-menu__socials-link");
const socialStrokeOne = document.querySelector(".social-svg__stroke-1");
const socialStrokeTwo = document.querySelector(".social-svg__stroke-2");
const socialFill = document.querySelector(".social-svg__fill");

socialLink.addEventListener("mouseover", function () {
  socialStrokeOne.style.stroke = "#cdaa7d";
  socialStrokeTwo.style.stroke = "#cdaa7d";
  socialFill.style.fill = "#cdaa7d";
});

socialLink.addEventListener("mouseout", function () {
  socialStrokeOne.style.stroke = "white";
  socialStrokeTwo.style.stroke = "white";
  socialFill.style.fill = "white";
});
