import Inputmask from "inputmask";
import AirDatepicker from 'air-datepicker';
import Splide from '@splidejs/splide';

import * as itemQuantityDropdown from '../../../blocks/guest-dropdown/item-quantity-dropdown.js';
import {guestDropdown} from './../../../blocks/guest-dropdown/guest-dropdown.js';
import {guestDropDownRooms} from './../../../blocks/guest-dropdown/_rooms/guest-dropdown_rooms.js';
import {textfieldMasked} from './../../../blocks/textfield/textfield_masked/textfield_masked.js';
import {textfieldDateDropdown} from './../../../blocks/textfield/textfield_date-dropdown/textfield_date-dropdown.js';
import {textfieldFilterDateDropdown} from './../../../blocks/textfield/textfield_filter-date-dropdown/textfield_filter-date-dropdown.js';
import {rateButton} from '../../../blocks/rate-button/rate-button.js';
import {roomCardSlider} from '../../../blocks/room-card/room-card-slider.js'



window.AirDatepicker = AirDatepicker;
window.Splide = Splide;
guestDropdown('.guest-dropdown');
guestDropDownRooms('.guest-dropdown_rooms');
rateButton('.rate-button');
window.onload = function(){
  textfieldMasked('.textfield__input.textfield_masked__input');
  textfieldDateDropdown('.textfield__input.textfield_date-dropdown__input.date-arrival__input');
  textfieldDateDropdown('.textfield__input.textfield_date-dropdown__input.date-exit__input');
  textfieldDateDropdown('.textfield__input.textfield_date-dropdown__input.booking-room-date-arrival__input');
  textfieldDateDropdown('.textfield__input.textfield_date-dropdown__input.booking-room-date-exit__input');
  textfieldFilterDateDropdown('.textfield__input.textfield_filter-date-dropdown__input');
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
