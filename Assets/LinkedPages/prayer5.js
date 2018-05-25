// setTimeout(function() {
//   randoColor(1);
//   $('#start').fadeIn(250).show(1);
//   $('#cite').fadeIn(250).show(1);
//   $('body')[0].css('cursor', 'default');
// }, 2500);



$('#start').click(function () {
  $('#line1').show(1);  
  $('body').addClass('newbg');
  
});

$('#line1').click(function () {
  $('#line2').show(1);  
  $('body').addClass('newbg');
});

$('#line2').click(function () {
  $('#line3').show(1);  
  $('#line4').show(1);  
  $('body').addClass('newbg');
});


// function nextLine(number) {
//   if (number === 1) {
    
//   } else if (number === 0) {
//     $
//     $('#start').delay(250).show(1);
  
//   }
// }




