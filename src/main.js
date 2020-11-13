import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Mars from './js/mars.js';
import Venus from './js/venus.js';
import Jupiter from './js/jupiter.js';
import Mercury from './js/mercury.js';


$(document).ready(function() {
  $("#calculator").submit(function(event) {
    event.preventDefault();
    const inputtedAge = parseInt($("input#age").val());
    const marsAge = marsAge(inputtedAge);
    
  })
})