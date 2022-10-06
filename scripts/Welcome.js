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
  })
  
  // custom welcome box
  setTimeout(function(){
    alert("Welcome!" + "\n" + "This is my personal take on a distraction-free, no budget writing tool. A fine line to walk, between design and functionality." + "\n" + "Yes, this project definitely needs more time and lovin but in the interim - feel free to play around and break it.", function(){
        console.log("Callback executed");
      });
  }, 500);
});