function paginationjsBlock(query = '.pagination') {
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
  
  $(`${query}__pagination`).pagination({
    dataSource: generateData(150),
    showNavigator: true,
    formatNavigator: "<%= totalNumber %> вариантов аренды",
    showPrevious: false,
    pageRange: 1,
    callback: function (data, pagination) {
      // template method of yourself
      var html = template(data);
      $(`${query}__data`).html(html);
    },
    afterPageOnClick: function () {
      let result = $(`${query}__pagination"`).pagination("getSelectedPageData");
      let pagenumb = $(`${query}__pagination`).pagination(
        "getSelectedPageNum"
      );
      let sum = 1;
      sum = result.length * pagenumb;
      let totalPage = $(`${query}__pagination`).pagination("getTotalPage");
      $(".paginationjs-nav.J-paginationjs-nav").prepend(
        `${sum - result.length + 1} - ${sum} из `
      );
    },
  });
  
  let result = $(`${query}__pagination`).pagination("getSelectedPageData");
  let pagenumb = $(`${query}__pagination`).pagination("getSelectedPageNum");
  let sum = 1;
  sum = result.length * pagenumb;
  let totalPage = $(`${query}__pagination`).pagination("getTotalPage");
  $(".paginationjs-nav.J-paginationjs-nav").prepend(
    `${sum - result.length + 1} - ${sum} из `
  );
  
}

export {paginationjsBlock};