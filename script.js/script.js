// allows DOM to load before running script
$(document).ready();
// Dynamic day clock for header
$("#currentDay").text(moment().format("MMMM Do YYYY"));

let time = moment().hour();
$(".saveBtn").on("click", function () {
  let text = $(this).siblings(".description").val();
  let time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
});

$("#9hour .description").val(localStorage.getItem("9hour"));
$("#10hour .description").val(localStorage.getItem("10hour"));
$("#11hour .description").val(localStorage.getItem("11hour"));
$("#12hour .description").val(localStorage.getItem("12hour"));
$("#13hour .description").val(localStorage.getItem("13hour"));
$("#14hour .description").val(localStorage.getItem("14hour"));
$("#15hour .description").val(localStorage.getItem("15hour"));
$("#16hour .description").val(localStorage.getItem("16hour"));
$("#17hour .description").val(localStorage.getItem("17hour"));

$(".time-block").each(function () {
  let timeBlock = parseInt($(this).attr("id").split("hour"));
  if (time > timeBlock) {
    $(this).addClass("past");
    $(this).removeClass("future");
    $(this).removeClass("present");
  } else if (time < timeBlock) {
    $(this).removeClass("past");
    $(this).addClass("future");
    $(this).removeClass("present");
  } else if (time === timeBlock) {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
  }
  return "error";
});
