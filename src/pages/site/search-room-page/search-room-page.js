import noUiSlider,{PipsMode} from 'nouislider';
import AirDatepicker from 'air-datepicker';
import Splide from '@splidejs/splide';

import * as paginationjs from 'paginationjs';
import * as itemQuantityDropdown from '../../../blocks/guest-dropdown/item-quantity-dropdown.js';
import {guestDropdown} from './../../../blocks/guest-dropdown/guest-dropdown.js';
import {guestDropDownRooms} from './../../../blocks/guest-dropdown/_rooms/guest-dropdown_rooms.js';
import {textfieldFilterDateDropdown} from './../../../blocks/textfield/textfield_filter-date-dropdown/textfield_filter-date-dropdown.js';
import {rangeSlider} from '../../../blocks/range-slider/range-slider.js';
import {paginationjsBlock} from '../../../blocks/pagination/paginationblock.js';
import {rateButton} from '../../../blocks/rate-button/rate-button.js';
import {roomCardSlider} from '../../../blocks/room-card/room-card-slider.js'
import {headerBurgerMenu} from "../../../blocks/header/header-burger-menu.js";


window.AirDatepicker = AirDatepicker;
window.noUiSlider = noUiSlider;
window.Splide = Splide;
headerBurgerMenu('.header');
guestDropdown('.guest-dropdown');
guestDropDownRooms('.guest-dropdown_rooms');
rateButton('.rate-button');
window.onload = function(){
  textfieldFilterDateDropdown('.textfield__input.textfield_filter-date-dropdown__input');
  rangeSlider('.range-slider');
  paginationjsBlock('.pagination');
  roomCardSlider([
    "#room-card__splide",
    "#room-card840__splide",
    "#room-card980__splide",
    "#room-card856__splide",
    "#room-card740__splide",
    "#room-card982__splide",
    "#room-card678__splide",
    "#room-card450__splide",
    "#room-card350__splide",
    "#room-card666__splide",
    "#room-card444__splide",
    "#room-card980__splide",
    "#room-card352__splide"
  ]);
}


const iconMenu = document.querySelector('.search-room-page__button-hiding-filter-container');
if (iconMenu) {
  const headerNav=document.querySelector('.search-room-page__filter');
  iconMenu.addEventListener("click",function(e){
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    headerNav.classList.toggle('_active');
  })
}