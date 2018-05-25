document.body.classList.add('fade');

setTimeout(function() {

  $('#start').show(1);
  
  $('body')[0].css('cursor', 'default');
}, 1000);


// $('#start').click(function () {
//   $('#start').hide(1);
  
//   nextLine(1);
// });

$('#line1').click(function () {
  $('#line1').hide(1);
  
  nextLine(2);
});

$('#line2').click(function () {
  $('#line2').hide(1);
  
  image01();
});


