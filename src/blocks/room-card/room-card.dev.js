"use strict";

document.addEventListener("DOMContentLoaded", function () {
  Splide.defaults = {
    width: 271,
    height: 152,
    type: "loop",
    cover: "true",
    autoplay: "true"
  };
  var splide_arr = ["#room-card__splide", "#room-card840__splide", "#room-card980__splide", "#room-card856__splide", "#room-card740__splide", "#room-card982__splide", "#room-card678__splide", "#room-card450__splide", "#room-card350__splide", "#room-card666__splide", "#room-card444__splide", "#room-card980__splide", "#room-card352__splide"]; //splide_arr.foreach(item=>new Splide(item).mount());

  for (var i = 0; i < splide_arr.length; i++) {
    new Splide(splide_arr[i]).mount();
  } // var splide = new Splide('#room-card__splide');
  // splide.mount();
  // var splide2 = new Splide('#room-card840__splide');
  // splide2.mount();

});