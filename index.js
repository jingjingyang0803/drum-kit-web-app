// Get the number of drum buttons
var numberOfDrumButtons = $(".drum").length;

// Add click event listeners to all drum buttons
$(".drum").click(function () {
  // Get the inner HTML of the clicked button
  var buttonInnerHTML = this.innerHTML;
  // Call the makeSound function with the button's inner HTML
  makeSound(buttonInnerHTML);
  // Call the buttonAnimation function with the button's inner HTML
  buttonAnimation(buttonInnerHTML);
});

// Add keypress event listener to the document
$(document).keypress(function (event) {
  // Call the makeSound function with the pressed key
  makeSound(event.key);
  // Call the buttonAnimation function with the pressed key
  buttonAnimation(event.key);
});

// Function to make sound based on key/button
function makeSound(key) {
  // Use switch-case to assign sounds to different keys
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(key);
  }
}

// Function to animate button when pressed
function buttonAnimation(currentKey) {
  // Get the active button using the current key
  // Add the "pressed" class to the active button
  $("." + currentKey).addClass("pressed");

  // Remove the "pressed" class after a delay
  setTimeout(function () {
    $("." + currentKey).removeClass("pressed");
  }, 100);
}
