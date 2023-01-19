

//display current day and time
var currentDate = dayjs().format('MMMM DD YYYY,h:mm a');

$("#currentDay").html(currentDate);
$(document).ready(function(){
  $(".saveBtn").on("click", function(){
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
   
    //text saved into local storage
    localStorage.setItem(time, text);
  })

  //function to track time of day
  function timeTrack(){
    var timeNow = dayjs().hour();

    $(".time-block").each(function (){
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);

        if (blockTime < timeNow){
          $(this).removeClass("future");
          $(this).removeClass("present");
          $(this).addClass("past");

        }else if (blockTime === timeNow){
          $(this).removeClass("past");
          $(this).removeClass("future");
          $(this).addClass("present");
        }else{
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");
        }
    })
  }

  //get item from storage if there is input
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  timeTrack();
 
})

  
