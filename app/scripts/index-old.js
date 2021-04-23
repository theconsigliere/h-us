// Global
console.log('yes')
import "babel-polyfill";
import jquery from "jquery";
window.$ = window.jQuery = jquery;


//libraries
import 'slick-carousel'
import 'lazysizes';
import "./modules/bbplayer";
import "./modules/jquery.currencies.min.js"
// import "@vimeo/player"
import 'fancybox'

// Modules
// import search from "./modules/search";

//js
import animation from "./modules/animation";
import header from "./modules/header";
import popup from "./modules/popup";
import video from "./modules/video";

//jquery
import addToCartFile from "./modules/application";
import currencyPickerFull from "./modules/currency-picker";
import theSlideshow from "./modules/slideshow";
import dragScroll from "./modules/drag-scroll";
import search from "./modules/search";



console.log('yord')

animation()
header()
// popup()
video()

const productTemplate = document.querySelector('.product-page')
if (productTemplate) {
Player()
}

$(document).ready(function() {
 // search.init();
  addToCartFile()
  currencyPickerFull()
  theSlideshow()
  dragScroll()
  search()
});
