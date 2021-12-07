"use strict";

$(document).ready(function () {
  $('.textfield.textfield--masked__input').inputmask({
    alias: "datetime",
    inputFormat: "dd.mm.yyyy",
    placeholder: "ДД.ММ.ГГГГ",
    min: "01.01.1900",
    max: "31.12.3000",
    clearIncomplete: true
  });
});