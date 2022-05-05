var allDrumButton = document.querySelectorAll(".drum").length;
for (let i = 0; i < allDrumButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){alert("I'm clicked!")});
}
