"use strict";

var generateData = function generateData(number) {
  var result = [];

  for (var i = 1; i < number + 1; i++) {
    result.push(i);
  }

  return result;
};

function template(data) {
  var html = '<ul>';
  $.each(data, function (index, item) {
    html += '<li>' + item + '</li>';
  });
  html += '</ul>';
  return html;
}

$('.pagination__pagination').pagination({
  dataSource: generateData(195),
  showPrevious: false,
  callback: function callback(data, pagination) {
    // template method of yourself
    var html = template(data);
    $('pagination__data').html(html);
  }
});