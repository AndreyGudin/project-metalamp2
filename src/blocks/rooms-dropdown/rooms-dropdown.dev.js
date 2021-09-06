"use strict";

$(document).ready(function () {
  $(".rooms-dropdown").iqDropdown({
    setSelectionText: function setSelectionText(itemCount, totalItems) {
      var t = ['гость', 'гостя', 'гостей'];
      var spln = ['спальня', 'спальни'];
      var beds = ['кровать', 'кровати'];
      var vankom = ['ванная комнаты', 'ванные комнаты'];
      var sum = "";
      if (totalItems == 0) return '';
      if (itemCount['item1'] == 1) sum = sum + itemCount['item1'] + ' ' + spln[0] + ',';
      if (itemCount['item1'] > 1) sum = sum + itemCount['item1'] + ' ' + spln[1] + ',';
      if (itemCount['item2'] == 1) sum = sum + itemCount['item2'] + ' ' + beds[0] + ',';
      if (itemCount['item2'] > 1) sum = sum + itemCount['item2'] + ' ' + beds[1] + ',';
      if (itemCount['item3'] == 1) sum = sum + itemCount['item3'] + ' ' + vankom[0];
      if (itemCount['item3'] > 1) sum = sum + itemCount['item3'] + ' ' + vankom[1];
      if (sum.length > 20) sum = sum.slice(0, 20) + '...';
      return sum; //if (totalItems >1 && totalItems < 5) return totalItems + ' ' + t[1];
      //if (totalItems > 4) return totalItems + ' ' + t[2];
    }
  });
});