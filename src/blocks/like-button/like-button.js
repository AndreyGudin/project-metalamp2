function likeButton(query = '.like-button') {
  $(document).on("click", `${query}__button.add`, function () {
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
  
}

export {likeButton};
