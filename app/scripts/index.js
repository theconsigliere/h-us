// Global
import "babel-polyfill";
import jquery from "jquery";
window.$ = window.jQuery = jquery;

// Modules
import search from "./modules/search";

console.log('yor')

$(document).ready(function() {
  search.init();
});
