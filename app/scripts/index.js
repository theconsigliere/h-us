// Global
import "babel-polyfill";
import jquery from "jquery";
window.$ = window.jQuery = jquery;

// Modules
import search from "./modules/search";

console.log('yord')


$(document).ready(function() {
  search.init();
});
