"use strict";

$(document).on("click", ".like-button__button.add", function () {
  $(".like-button__button").addClass("active").removeClass("add");
  $(".like-button__span").html(function (numberp) {
    numberp = parseInt($(".like-button__span").html());
    numberp++;
    return numberp.toString();
  });
});
$(document).on("click", ".active", function () {
  $(".like-button__span").html(function (numberp) {
    numberp = parseInt($(".like-button__span").html());

    if (numberp > 0) {
      numberp--;
      console.log(numberp);
      return numberp.toString();
    }
  });
  $(".like-button__button").removeClass("active").addClass("add");
});