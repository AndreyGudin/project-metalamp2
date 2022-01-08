"use strict";

var iconMenu = document.querySelector('.header__burger');

if (iconMenu) {
  var headerNav = document.querySelector('.header__nav');
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    headerNav.classList.toggle('_active');
  });
}