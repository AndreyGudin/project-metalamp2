document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '#room-card__splide',{
    width: 271,
    height: 152,
    type: 'loop',
    cover: 'true',
  } );
  splide.mount();

  var splide2 = new Splide( '#room-card840__splide',{
    width: 271,
    height: 152,
    type: 'loop',
    cover: 'true',
  } );
  splide2.mount();
} );