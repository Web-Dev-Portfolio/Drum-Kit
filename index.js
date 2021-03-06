var allDrumButton = document.querySelectorAll(".drum").length; // cahcing the amount of button with .drum class in array

for (let i = 0; i < allDrumButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() { //adding click eventlistener for all button in .drum class
    var buttonPressed = this.innerHTML; // caching the element that got clicked
    playAudio(buttonPressed);
    animateButton(buttonPressed);
  });
}

document.addEventListener("keydown", function(event) { //add keydown event listener for whole document
  var keyPressed = event.key; // caching the pressed key (string)
  playAudio(keyPressed);
  animateButton(keyPressed);
})

function playAudio(key) {
  switch (key) { //playing audio by that key
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    default:
      console.log(key); // for any other than above
  }
}

function animateButton (buttonPressed){
  var activeButton = document.querySelector("."+buttonPressed);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed")
  }, 100);
}
