import Splide from '@splidejs/splide';
import Chart from 'chart.js/auto';
import AirDatepicker from 'air-datepicker';

import * as itemQuantityDropdown from '../../../blocks/guest-dropdown/item-quantity-dropdown.js';

import {headerBurgerMenu} from "../../../blocks/header/header-burger-menu.js";
import {guestDropdown} from './../../../blocks/guest-dropdown/guest-dropdown.js';
import {textfieldDateDropdown} from './../../../blocks/textfield/textfield_date-dropdown/textfield_date-dropdown.js';
import {graphReviews} from '../../../blocks/graph-reviews/graph-reviews.js';
import {likeButton} from '../../../blocks/like-button/like-button.js';

window.AirDatepicker = AirDatepicker;
window.Chart = Chart;
window.Splide = Splide;

headerBurgerMenu('.header');
guestDropdown('.guest-dropdown');
likeButton('.like-button');

window.onload = function(){
  textfieldDateDropdown('.textfield__input.textfield_date-dropdown__input.date-arrival__input');
  textfieldDateDropdown('.textfield__input.textfield_date-dropdown__input.date-exit__input');
  graphReviews('.graph-reviews');
  if ( screen.width <= 425 ) {
    new Splide( '#room-details-page__room-images__splide', {
      width: 425,
      height: 228,
      type: "loop",
      cover: "true",
      autoplay: "true",
    } ).mount();
  }
}

window.onresize = function(){location.reload();}