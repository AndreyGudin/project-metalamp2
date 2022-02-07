"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo = foo;

function foo() {
  $(document).ready(function () {
    $(".guest-dropdown").iqDropdown({
      setSelectionText: function setSelectionText(itemCount, totalItems) {
        var t = ["гость", "гостя", "гостей"];
        var returnString = '';
        var guestsCount = itemCount['item1'] + itemCount['item2'];
        if (totalItems == 0) return "Сколько гостей";
        if (totalItems == 1) return "1 гость";
        if (guestsCount > 1 && guestsCount < 5) returnString += "".concat(itemCount['item1'] + itemCount['item2'], " \u0433\u043E\u0441\u0442\u044F");
        if (guestsCount > 4) returnString += "".concat(itemCount['item1'] + itemCount['item2'], " \u0433\u043E\u0441\u0442\u0435\u0439");
        if (itemCount['item3'] == 1) returnString += ", ".concat(itemCount['item3'], " \u043C\u043B\u0430\u0434\u0435\u043D\u0435\u0446");
        if (itemCount['item3'] > 1) returnString += ", ".concat(itemCount['item3'], " \u043C\u043B\u0430\u0434\u0435\u043D\u0446\u0430");
        return returnString;
      }
    });
  });
}