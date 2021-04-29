// Global
import "babel-polyfill";
import jquery from "jquery";
$ = window.$ = window.jQuery = jquery;


//libraries
import 'slick-carousel';
import 'lazysizes';
import "@vimeo/player";
// import ('./modules/fancybox');
require('./modules/jquery.currencies.min.js');


// vanilla js
import header from "./modules/header";
// import popup from "./modules/popup";
import animation from "./modules/animation";
import video from "./modules/video";
// import dragScroll from './modules/drag-scroll';


// jquery
import search from "./modules/search";
import theSlideshow from "./modules/slideshow";
import addToCartFile from "./modules/application";
import currencyPickerFull from "./modules/currency-picker";
import quickview from "./modules/quickview";


//check product templates
$(document).ready(function() {
  search()
  theSlideshow()
 // currencyPickerFull()
  addToCartFile()

 // vanilla js
  header()
  // popup()
  animation()
  video()

 // dragScroll()
 quickview()



});



