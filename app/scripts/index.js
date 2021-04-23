// Global
console.log('yes')
import "babel-polyfill";
import jquery from "jquery";
window.$ = window.jQuery = jquery;

//libraries
import 'slick-carousel'
import 'lazysizes'
import "@vimeo/player"
require("@fancyapps/fancybox");

// vanilla js
import header from "./modules/header";
import popup from "./modules/popup";
import animation from "./modules/animation";
import video from "./modules/video";

// jquery
import search from "./modules/search";
import theSlideshow from "./modules/slideshow";
import addToCartFile from "./modules/application";
import currencyPickerFull from "./modules/currency-picker";


//check product templates
$(document).ready(function() {
  search()
  theSlideshow()
  addToCartFile()
 // currencyPickerFull()
  video()
  

  // vanilla js
  header()
  // popup()
  animation()
});
