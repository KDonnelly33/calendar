
$(function () {
  // add click event listener to save button and save to local storage
  $('.saveBtn').on('click', function () {
    var time = $(this).siblings('.description').data('time');
    var event = $(this).siblings('.description').val();
    localStorage.setItem('event-' + time, event);
  });
  // call colorTime function
  colorTime();
  // function to change color of time blocks
  function colorTime() {
    // get current hour
    var currentTime = dayjs().hour();
    // loop to check time and add appropriate class
    $('.description').each(function () {
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
  // call entryfield function
  entryfield()
  //  function to display entry field and retrieve from local storage
  function entryfield() {
    $('.description').each(function () {
      var time = $(this).data('time');
      var event = localStorage.getItem('event-' + time);
      $(this).val(event);
    });
    // display current date in header using dayjs
    var displayDate = dayjs().format('dddd, MMMM D, YYYY');
    $('#currentDay').text(displayDate);
  };
});





