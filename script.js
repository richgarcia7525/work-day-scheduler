//current date and time
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

//added click listener
$(document).ready(function () {
    $(".saveBtn").on("click", fucntion () ;
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
    
        //save to local storage
        localStorage.setItem(time, text);
})

    function timeTrackr() {
        //number of hours
        var timeNow = moment().hour();
    //loop time block
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]
            );
//time and background 
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
//get items from local storage

    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour1 .description").val(localStorage.getItem("hour1"));
    $("#hour2 .description").val(localStorage.getItem("hour2"));
    $("#hour3 .description").val(localStorage.getItem("hour3"));
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    $("#hour5 .description").val(localStorage.getItem("hour5"));

    timeTracker();


