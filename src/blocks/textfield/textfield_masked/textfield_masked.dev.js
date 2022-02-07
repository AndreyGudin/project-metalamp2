"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo4 = foo4;

function foo4() {
  $(document).ready(function () {
    $('.textfield__input.textfield_masked__input').inputmask({
      alias: "datetime",
      inputFormat: "dd.mm.yyyy",
      placeholder: "ДД.ММ.ГГГГ",
      min: "01.01.1900",
      max: "31.12.3000",
      clearIncomplete: true
    });
  });
}