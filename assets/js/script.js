// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    $('.saveBtn').on('click', function() {
      var time = $(this).siblings('.description').data('time');
      var event = $(this).siblings('.description').val();
      localStorage.setItem('event-' + time, event);
    });
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. 
    colorTime();
    function colorTime() {
      var currentTime = dayjs().hour();
      $('.description').each(function() {
        var time = $(this).data('time');
        if (time < currentTime) {
          $(this).addClass('past');
        } else if (time === currentTime) {
          $(this).addClass('present');
        } else {
          $(this).addClass('future');
        }
      });
    }
      entryfield()
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements.
      function entryfield() {
        $('.description').each(function() {
          var time = $(this).data('time');
          var event = localStorage.getItem('event-' + time);
          $(this).val(event);
        });
    // TODO: Add code to display the current date in the header of the page.
    // Display current date
    var displayDate = dayjs().format('dddd, MMMM D, YYYY');
    $('#currentDay').text(displayDate);
  };
});
   


  

