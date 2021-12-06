var slider = document.querySelector(".range-slider__slider");
var rangeSliderValueElement = document.querySelector(".range-slider__range");
noUiSlider.create(slider, {
  start: [2000, 8000],
  connect: true,
  step: 500,
  range: {
    min: 0,
    max: 20000,
  },
});
slider.noUiSlider.on("update", function (values) {
  rangeSliderValueElement.innerHTML = values.join("₽ - ").concat("₽");
});
