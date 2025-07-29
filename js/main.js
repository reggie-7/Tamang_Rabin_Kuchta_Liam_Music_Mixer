console.log("JavaScript is connected");

const buttonPause = document.querySelector("pause"),
buttonStop = document.querySelector("stop"),
volume = document.querySelector("volumebar"),
buttonPlay = document.querySelector("#play"),
buttonReset = document.querySelector("reset");
const dropAreas = document.querySelectorAll(".drop-area");
const sounds = document.querySelectorAll(".single-sound")

let dragSound;
let playing = [];
const reorderSounds = [];



// sounds back to top 
sounds.forEach((sound) => {
    reorderSounds.push(sound.parentElement);
});



// FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS 
function playSound() {
    playing.forEach((audio) => {
        audio.play();
    });
}

function pauseSound() {
    playing.forEach((audio) => {
        audio.pause();
    });
}

function restartSound() {
    playing.forEach((audio) => {
        audio.currentTime = 0;
        audio.play();
    });
}





function reorder() {
    sounds.forEach((sound, index) => {

    reorderSounds[index].appendChild(sound);
    });

    playing.forEach((audio) => {
        audio.pause();
        audio.currentTime = 0;
    });
    playing = [];
}
