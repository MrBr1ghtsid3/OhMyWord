// Inspired by https://codepen.io/XemsDoom/pen/JjOBoG

// var currentCallback;
// myMessage = "Welcome! This is my personal take on a distraction-free, no budget writing tool. A fine line to walk, between design and functionality. Currently compatible with Google Chrome, only! Yes, this project definitely needs more time and lovin but in the interim - feel free to play around and break it.";

// // override default browser alert styling
// window.alert = function(msg, callback){
//   $('.message').text(msg);
//   $('.customAlert').css('animation', 'fadeIn 1s linear');
//   $('.customAlert').css('display', 'inline');
//   currentCallback = callback;
// }

// $(function(){
  
//   // add listener for when our confirmation button is clicked
//   $('.confirmButton').click(function(){
//     $('.customAlert').css('animation', 'fadeOut 0.5s linear');
//     setTimeout(function(){
//      $('.customAlert').css('animation', 'none');
//     $('.customAlert').css('display', 'none');
//     }, 300);
//     currentCallback();
//   })

// // custom welcome box
// setTimeout(function(){
//   alert(myMessage, function(){
//       console.log("Callback executed");
//     });
// }, 500);
// });

let myModal = new bootstrap.Modal(document.getElementById('myModal'), {});
myModal.show();