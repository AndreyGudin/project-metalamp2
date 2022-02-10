import $ from 'jquery';
import Inputmask from "inputmask";
import noUiSlider from 'nouislider';
import Chart from 'chart.js/auto';


import * as paginationjs from 'paginationjs';
import * as itemQuantityDropdown from '../../../blocks/guest-dropdown/item-quantity-dropdown.js';
import {guestDropdown} from './../../../blocks/guest-dropdown/guest-dropdown.js';
import {guestDropDownRooms} from './../../../blocks/guest-dropdown/_rooms/guest-dropdown_rooms.js';
import {textfieldMasked} from './../../../blocks/textfield/textfield_masked/textfield_masked.js';
import {rangeSlider} from './../../../blocks/range-slider/range-slider.js';
import {likeButton} from '../../../blocks/like-button/like-button.js';
import {paginationjsBlock} from '../../../blocks/pagination/paginationblock.js';
import {graphReviews} from '../../../blocks/graph-reviews/graph-reviews.js';


guestDropdown();
guestDropDownRooms();
textfieldMasked('.textfield__input.textfield_masked__input');
likeButton();
rangeSlider('.range-silder');
paginationjsBlock();
graphReviews('.graph-reviews');
