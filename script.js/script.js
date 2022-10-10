$(document).ready();
//variables
let currentTime = moment().format("MMMM Do YYYY, hh:mm:ss a");
let hoursToday = [
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
];
//Connected elements
const timeRows = $(".container");
const hours = $("#one");

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
