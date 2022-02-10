function rangeSlider(query) {
  let slider = document.querySelector(`${query}__slider`);
  let rangeSliderValueElement = document.querySelector(`${query}__range`);
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
}

export {rangeSlider};

