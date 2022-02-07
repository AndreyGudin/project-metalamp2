"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo3 = foo3;

function foo3() {
  $(document).ready(function () {
    $(".guest-dropdown_rooms").iqDropdown({
      setSelectionText: function setSelectionText(itemCount, totalItems) {
        var t = ["гость", "гостя", "гостей"];
        var spln = ["спальня", "спальни"];
        var beds = ["кровать", "кровати"];
        var vankom = ["ванная комнаты", "ванные комнаты"];
        var sum = "";
        if (totalItems == 0) return "";
        if (itemCount["item1"] == 1) sum = sum + itemCount["item1"] + " " + spln[0] + ",";
        if (itemCount["item1"] > 1) sum = sum + itemCount["item1"] + " " + spln[1] + ",";
        if (itemCount["item2"] == 1) sum = sum + itemCount["item2"] + " " + beds[0] + ",";
        if (itemCount["item2"] > 1) sum = sum + itemCount["item2"] + " " + beds[1] + ",";
        if (itemCount["item3"] == 1) sum = sum + itemCount["item3"] + " " + vankom[0];
        if (itemCount["item3"] > 1) sum = sum + itemCount["item3"] + " " + vankom[1];
        if (sum.length > 20) sum = sum.slice(0, 20) + "...";
        return sum;
      }
    });
  });
}