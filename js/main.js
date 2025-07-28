console.log("JavaScript is connected");

const buttonPause = document.querySelector("pause"),
buttonStop = document.querySelector("stop"),
volume = document.querySelector("volumebar"),
buttonPlay = document.querySelector("#play"),
buttonReset = document.querySelector("reset");
const dropAreas = document.querySelectorAll(".drop-area");
const sounds = document.querySelectorAll(".single-sound")

let dragSound;

const reorderSounds = [];

sounds.forEach((sound) => {
    reorderSounds.push(sound.parentElement);
});


/* FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS FUNCTIONS */

function 

