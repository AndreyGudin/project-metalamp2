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
  dataSource: generateData(150),
  showNavigator: true,
  formatNavigator: "<%= totalNumber %> вариантов аренды",
  showPrevious: false,
  pageRange: 1,
  callback: function callback(data, pagination) {
    // template method of yourself
    var html = template(data);
    $("pagination__data").html(html);
  },
  afterPageOnClick: function afterPageOnClick() {
    var result = $(".pagination__pagination").pagination("getSelectedPageData");
    var pagenumb = $(".pagination__pagination").pagination("getSelectedPageNum");
    var sum = 1;
    sum = result.length * pagenumb;
    var totalPage = $(".pagination__pagination").pagination("getTotalPage");
    $(".paginationjs-nav.J-paginationjs-nav").prepend("".concat(sum - result.length + 1, " - ").concat(sum, " \u0438\u0437 "));
  }
});
var result = $(".pagination__pagination").pagination("getSelectedPageData");
var pagenumb = $(".pagination__pagination").pagination("getSelectedPageNum");
var sum = 1;
sum = result.length * pagenumb;
var totalPage = $(".pagination__pagination").pagination("getTotalPage");
$(".paginationjs-nav.J-paginationjs-nav").prepend("".concat(sum - result.length + 1, " - ").concat(sum, " \u0438\u0437 "));