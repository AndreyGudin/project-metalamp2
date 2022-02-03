"use strict";

var iconMenu = document.querySelector('.search-room-page__button-hiding-filter-container');

if (iconMenu) {
  var headerNav = document.querySelector('.search-room-page__filter');
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    headerNav.classList.toggle('_active');
  });
}