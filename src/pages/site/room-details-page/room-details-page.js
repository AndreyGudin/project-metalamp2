document.addEventListener("DOMContentLoaded", function () {

if ( screen.width <= 425 ) {
  new Splide( '#room-details-page__room-images__splide', {
    width: 425,
    height: 228,
    type: "loop",
    cover: "true",
    autoplay: "true",
  } ).mount();
}

window.onresize = function(){ location.reload(); }

})