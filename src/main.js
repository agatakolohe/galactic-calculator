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
    const marsResponse = mars.marsAge();
    const timeLeftOnMars = mars.timeLeftOnMars();
    const venusResponse = venus.venusAge();
    const timeLeftOnVenus = venus.timeLeftOnVenus();
    const jupiterResponse = jupiter.jupiterAge();
    const timeLeftOnJupiter = jupiter.timeLeftOnJupiter();
    const mercuryResponse = mercury.mercuryAge();
    const timeLeftOnMercury = mercury.timeLeftOnMercury();
    $("#mars-response").text(`Mars: ${marsResponse} years old. ${timeLeftOnMars}`);
    $("#jupiter-response").text(`Jupiter: ${jupiterResponse} years old. ${timeLeftOnJupiter}`);
    $("#mercury-response").text(`Mercury: ${mercuryResponse} years old. ${timeLeftOnMercury}`);
    $("#venus-response").text(`Venus: ${venusResponse} years old. ${timeLeftOnVenus}`);
  });
});