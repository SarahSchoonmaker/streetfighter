$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-throwing').hide();
    $('.ryu-cool').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-throwing').hide();
    $('.ryu-cool').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-cool').hide();
    $('.ryu-still').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
    .animate(
      {'left': '300px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '-212px');
      });
  })
  .mouseup(function() {
    $('.ryu-still').hide();
    $('.ryu-throwing').hide();
    $('.ryu-cool').hide();
    $('.ryu-ready').show();
  });
  $(document).keydown(function(event) {
    if(event.which == 88) {
      $('.ryu-throwing').hide();
      $('.ryu-ready').hide();
      $('.ryu-still').hide();
      $('.ryu-cool').show();
    }
  })
  .keyup(function(event) {
    if(event.which == 88) {
      $('.ryu-ready').hide();
      $('.ryu-throwing').hide();
      $('.ryu-cool').hide();
      $('.ryu-still').show();
    }
  });
});

function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.3;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}