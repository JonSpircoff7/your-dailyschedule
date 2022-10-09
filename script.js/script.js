$(document).ready();
//variables
let currentTime = moment().format("MMMM Do YYYY, hh:mm:ss a");

//Connected elements
const timeRows = $(".container");

//Dynamic Date Function
setInterval(function setTime() {
  currentTime = moment().format("MMMM Do YYYY");
  $("#currentDay").text(currentTime);
}, 1000);


// function appendRows() {
//     for (let i = 0; i < 5; i++) {
//       timeRows.append("<p>this is text<p>");
//     }
//   }
//   appendRows();
