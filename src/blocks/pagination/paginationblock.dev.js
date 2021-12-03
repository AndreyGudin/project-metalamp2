"use strict";

var generateData = function generateData(number) {
  var result = [];

  for (var i = 1; i < number + 1; i++) {
    result.push(i);
  }

  return result;
};

function template(data) {
  var html = "<ul>";
  $.each(data, function (index, item) {
    html += "<li>" + item + "</li>";
  });
  html += "</ul>";
  return html;
}

$(".pagination__pagination").pagination({
  dataSource: generateData(500),
  showNavigator: true,
  formatNavigator: "<%= totalNumber %> entries",
  showPrevious: false,
  callback: function callback(data, pagination) {
    // template method of yourself
    var html = template(data);
    $("pagination__data").html(html);
  },
  afterPageOnClick: function afterPageOnClick() {
    var result = $(".pagination__pagination").pagination("getSelectedPageData");
    var totalPage = $(".pagination__pagination").pagination("getTotalPage");
    console.log(result);
    $(".paginationjs-nav.J-paginationjs-nav").prepend("".concat(result.length.toString(), " \u0438\u0437 "));
  }
});