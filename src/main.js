import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import  Mars from './js/mars.js';
import Venus from './js/venus.js';
import Jupiter from './js/jupiter.js';
import Mercury from './js/mercury.js';



$(document).ready(function() {
  $("#calculator").submit(function(event) {
    event.preventDefault();
    const inputtedAge = parseInt($("input#age").val());
    const mars = new Mars(inputtedAge);
    const venus = new Venus(inputtedAge);
    const jupiter = new Jupiter(inputtedAge);
    const mercury = new Mercury(inputtedAge);

   const showJupiter = jupiter.jupiterAge();
   $("#jupiter-response").text(showJupiter);

console.log(mars);
console.log(Venus);
console.log(Jupiter);
console.log(Mercury);
  });
});