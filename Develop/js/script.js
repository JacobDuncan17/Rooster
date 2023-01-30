$(document).ready(function () {
  //saves what you enter in the hour slot when you press the save button
  $(".saveBtn").click(function(){
    var theTime = $(this).siblings(".hour").text();
    var thingToDo = $(this).siblings(".plan").val();
    localStorage.setItem(theTime, thingToDo);
    });
  //adds future, present, or past class depending on the time of the day
  var time = dayjs().hour();
  $(".time-block").each(function(){
    var hour = $(this).attr("id");
    $(this).addClass(hour > time ? "future" : hour == time ? "present" : "past");
  });
  //If page is reloaded it puts the info back in the scheduler that was saved
  $(".hour").each(function (){
    var currentHour = $(this).text(),
    plan = localStorage.getItem(currentHour);
    $(this).siblings(".plan").val(plan || "");
    });
  //Displays Date in the header of the page
  $("#currentDay").text(dayjs().format('DD MMMM YYYY'));
  });

