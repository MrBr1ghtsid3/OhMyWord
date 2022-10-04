// Inspired by https://codepen.io/XemsDoom/pen/JjOBoG

var currentCallback;

// override default browser alert
window.alert = function(msg, callback){
  $('.message').text(msg);
  $('.customAlert').css('animation', 'fadeIn 0.3s linear');
  $('.customAlert').css('display', 'inline');
  setTimeout(function(){
    $('.customAlert').css('animation', 'none');
  }, 300);
  currentCallback = callback;
}

$(function(){
  
  // add listener for when our confirmation button is clicked
	$('.confirmButton').click(function(){
    $('.customAlert').css('animation', 'fadeOut 0.3s linear');
    setTimeout(function(){
     $('.customAlert').css('animation', 'none');
		$('.customAlert').css('display', 'none');
    }, 300);
    currentCallback();
  });
  
  // our custom alert box
  setTimeout(function(){
    alert('You are probably reading this alert box and have no clue why the heck you are even reading it, well guess what, the moon in reality is nothing else than a big ass pokemon, floating in space.', function(){
        console.log("Callback executed");
      });
  }, 500);
});