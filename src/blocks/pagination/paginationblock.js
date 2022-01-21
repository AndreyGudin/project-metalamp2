var generateData = function (number) {
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
  callback: function (data, pagination) {
    // template method of yourself
    var html = template(data);
    $("pagination__data").html(html);
  },
  afterPageOnClick: function () {
    let result = $(".pagination__pagination").pagination("getSelectedPageData");
    let pagenumb = $(".pagination__pagination").pagination(
      "getSelectedPageNum"
    );
    let sum = 1;
    sum = result.length * pagenumb;
    let totalPage = $(".pagination__pagination").pagination("getTotalPage");
    $(".paginationjs-nav.J-paginationjs-nav").prepend(
      `${sum - result.length + 1} - ${sum} из `
    );
  },
});

let result = $(".pagination__pagination").pagination("getSelectedPageData");
let pagenumb = $(".pagination__pagination").pagination("getSelectedPageNum");
let sum = 1;
sum = result.length * pagenumb;
let totalPage = $(".pagination__pagination").pagination("getTotalPage");
$(".paginationjs-nav.J-paginationjs-nav").prepend(
  `${sum - result.length + 1} - ${sum} из `
);
