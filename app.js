// Iteration 1: Make the Play button functional.
var playBtn=document.querySelector('#play-button');

function play(){
    location.href="./game.html";
}
playBtn.addEventListener('click',play);
// Description: When the Play button is clicked the game page should be displayed.
