$(document).ready(function() {
  var ryuStill = $('.ryu-still'),
      ryuThrowing = $('.ryu-throwing'),
      ryuCool = $('.ryu-cool'),
      ryuReady = $('.ryu-ready')
      
  $('.ryu').mouseenter(function() {
    ryuStill.hide();
    ryuThrowing.hide();
    ryuCool.hide();
    ryuReady.show();
  })
  .mouseleave(function() {
    ryuReady.hide();
    ryuThrowing.hide();
    ryuCool.hide();
    ryuStill.show();
  })
  .mousedown(function() {
    playHadouken();
    ryuReady.hide();
    ryuCool.hide();
    ryuStill.hide();
    ryuThrowing.show();
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
    ryuStill.hide();
    ryuThrowing.hide();
    ryuCool.hide();
    ryuReady.show();
  });
  $(document).keydown(function(event) {
    if(event.which == 88) {
      ryuThrowing.hide();
      ryuReady.hide();
      ryuStill.hide();
      ryuCool.show();
    }
  })
  .keyup(function(event) {
    if(event.which == 88) {
      ryuReady.hide();
      ryuThrowing.hide();
      ryuCool.hide();
      ryuStill.show();
    }
  });
});

function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.3;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}