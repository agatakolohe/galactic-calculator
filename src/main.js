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
    const congrats= `Congratulations! Technology has sufficiently advanced and you have surpassed the time projected for you to survive on on each planet. Or it didn't, and you dead.`;
    $("#congrats").text(congrats);
    $("#mars-response").text(`Mars: ${marsResponse} years old. You have ${timeLeftOnMars} time left on Mars!`);
    $("#jupiter-response").text(`Jupiter: ${jupiterResponse} years old. You have ${timeLeftOnJupiter} time left on Jupiter!`);
    $("#mercury-response").text(`Mercury: ${mercuryResponse} years old. You have ${timeLeftOnMercury} time left on Mercury!`);
    $("#venus-response").text(`Venus: ${venusResponse} years old. You have ${timeLeftOnVenus} time left on Venus!`);
  });
});