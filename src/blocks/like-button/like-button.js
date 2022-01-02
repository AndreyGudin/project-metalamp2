$(document).on("click", ".like-button__button.add", function () {
  $(this).addClass("active").removeClass("add");
  $(this).children("span").html(function (numberp) {
    numberp = parseInt($(this).text());
    numberp++;
    return numberp.toString();
  });
});

$(document).on("click", ".active", function () {
  $(this).children("span").html(function (numberp) {
    numberp = parseInt($(this).text());
    if (numberp > 0) {
      numberp--;
      return numberp.toString();
    }
  });
  $(this).removeClass("active").addClass("add");
});
