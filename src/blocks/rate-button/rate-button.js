function rateButton(query) {
  $(document).ready(function () {
    $(document).on("click", `${query}__label`, function () {
      $(this).prevAll().children().removeClass("fillgrad");
      $(this).nextAll().children().addClass("fillgrad");
      $(this).children().addClass("fillgrad");
    })
  })
}

export {rateButton};
