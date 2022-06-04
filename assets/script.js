//Display the current date
var todaysDate = moment().format('dddd, MMM Do YYYY');
$('#currentDay').html(todaysDate);

$(document).ready(function (){
    //adding click listener for saveBtn
    $('.saveBtn').on('click', function () {
        var text = $(this).siblings('.description').val()
        var time = $(this).parent().attr('id');

        //save the text to local storage
        localStorage.setItem(time, text);
    })

    function timeTracker() {
    }
})