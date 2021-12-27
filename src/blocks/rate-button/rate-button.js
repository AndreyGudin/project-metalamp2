$(document).ready(function () {
  $(document).on("click", ".rate-button__label", function () {
    $(this).prevAll().children().removeClass("fillgrad");
    $(this).nextAll().children().addClass("fillgrad");
    $(this).children().addClass("fillgrad");
  })

})