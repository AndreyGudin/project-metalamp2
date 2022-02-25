import AirDatepicker from 'air-datepicker';

import * as itemQuantityDropdown from '../../../blocks/guest-dropdown/item-quantity-dropdown.js';

import {headerBurgerMenu} from "../../../blocks/header/header-burger-menu.js";
import {textfieldDateDropdown} from './../../../blocks/textfield/textfield_date-dropdown/textfield_date-dropdown.js';
import {guestDropdown} from './../../../blocks/guest-dropdown/guest-dropdown.js';

headerBurgerMenu('.header');
guestDropdown();
window.AirDatepicker = AirDatepicker;
window.onload = function(){
  textfieldDateDropdown('.textfield__input.textfield_date-dropdown__input.date-arrival__input');
  textfieldDateDropdown('.textfield__input.textfield_date-dropdown__input.date-exit__input');

}