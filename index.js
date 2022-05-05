var allDrumButton = document.querySelectorAll(".drum").length;
for (let i = 0; i < allDrumButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var element = this.innerHTML;
    switch (element) {
      case "w":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
        break;
      default:

    }

  });
}
