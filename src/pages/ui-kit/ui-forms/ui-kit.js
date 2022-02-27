import Inputmask from "inputmask";
import noUiSlider,{PipsMode} from 'nouislider';
import Chart from 'chart.js/auto';
import AirDatepicker from 'air-datepicker';

import * as paginationjs from 'paginationjs';
import * as itemQuantityDropdown from '../../../blocks/guest-dropdown/item-quantity-dropdown.js';
import {guestDropdown} from './../../../blocks/guest-dropdown/guest-dropdown.js';
import {guestDropDownRooms} from './../../../blocks/guest-dropdown/_rooms/guest-dropdown_rooms.js';
import {textfieldMasked} from './../../../blocks/textfield/textfield_masked/textfield_masked.js';
import {textfieldDateDropdown} from './../../../blocks/textfield/textfield_date-dropdown/textfield_date-dropdown.js';
import {textfieldFilterDateDropdown} from './../../../blocks/textfield/textfield_filter-date-dropdown/textfield_filter-date-dropdown.js';
import {rangeSlider} from '../../../blocks/range-slider/range-slider.js';
import {likeButton} from '../../../blocks/like-button/like-button.js';
import {paginationjsBlock} from '../../../blocks/pagination/paginationblock.js';
import {rateButton} from '../../../blocks/rate-button/rate-button.js';
import {graphReviews} from '../../../blocks/graph-reviews/graph-reviews.js';



window.AirDatepicker = AirDatepicker;
window.noUiSlider = noUiSlider;
window.Chart = Chart;
guestDropdown('.guest-dropdown');
guestDropDownRooms('.guest-dropdown_rooms');
likeButton('.like-button');
rateButton('.rate-button');
window.onload = function(){
  textfieldMasked('.textfield__input.textfield_masked__input');
  textfieldDateDropdown('.textfield__input.textfield_date-dropdown__input');
  textfieldFilterDateDropdown('.textfield__input.textfield_filter-date-dropdown__input');
  rangeSlider('.range-slider');
  graphReviews('.graph-reviews');
  paginationjsBlock('.pagination');
}
