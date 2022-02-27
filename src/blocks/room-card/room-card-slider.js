function roomCardSlider(arraySliderQuery = ["#room-card__splide"]) {
  Splide.defaults = {
    width: 271,
    height: 152,
    type: "loop",
    cover: "true",
    autoplay: "true",
  };

  for (var i = 0; i < arraySliderQuery.length; i++) {
    new Splide(arraySliderQuery[i]).mount();
  }
}

export {roomCardSlider};