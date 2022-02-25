import Inputmask from "inputmask";

import {headerBurgerMenu} from "../../../blocks/header/header-burger-menu.js";
import {textfieldMasked} from './../../../blocks/textfield/textfield_masked/textfield_masked.js';

headerBurgerMenu('.header');
window.onload = function(){

textfieldMasked('.textfield__input.textfield_masked__input');
}