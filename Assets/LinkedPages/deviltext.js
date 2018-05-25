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

$('#image01').click(function () {
  
  nextline(3);
});

function nextLine(number) {
  if (number === 1) {
    $('#line1').show(1);
  } else if (number === 2) {
    $('#line2').show(1);
  } else {
    $('#line' + (number - 1)).hide(1);
    $('#line' + number).show(1);
  }
  
}

function changecolor(number) {
  nextLine(number);
}



function image01() {
  /*
  $('#image01').show(1);
  $('#line2').hide(1);
  $('#line3').show(1);
*/
	

	$('#line2').hide(1);
	
	document.body.style.backgroundImage = 'url(images/image01.png)';
	document.body.style.backgroundSize = '100%';

}





