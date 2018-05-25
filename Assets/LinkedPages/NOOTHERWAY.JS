document.body.classList.add('fade');

$('#start').click(function () {
  $('#line1').show(1);
});


$('#line1').click(function () {
  $('#line2').show(1);
});

setTimeout(function() {

  $('#start').show(1);
  
  $('body')[0].css('cursor', 'default');
}, 1000);