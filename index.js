"use strict";
window.addEventListener("scroll", function () {
  this.document
    .querySelector("nav")
    ?.classList.toggle("active", window.scrollY > 0);
});

// toggle navigators
let linksCon = document.querySelector(".links");
let overlay = document.querySelector(".overlay");
let menu_btn = document.querySelector(".menu_btns");
let nav = document.querySelector("nav");

menu_btn.addEventListener("click", function () {
  linksCon.classList.toggle("active");
  overlay.classList.toggle("active");
  menu_btn.classList.toggle("active");
});
