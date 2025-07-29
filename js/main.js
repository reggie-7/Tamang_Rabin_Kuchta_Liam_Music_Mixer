console.log("JavaScript is connected");

const buttonPause = document.querySelector("pause"),
buttonStop = document.querySelector("stop"),
volume = document.querySelector("volumebar"),
buttonPlay = document.querySelector("#play"),
buttonReset = document.querySelector("#reset");
const dropAreas = document.querySelectorAll(".drop-area");
const sounds = document.querySelectorAll(".single-sound")
const soundsDiv = document.querySelector("sounds1");

let dragSound;
let playing = [];
const reorderSounds = [];

let currentDraggedElement = null;


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

//--------------------------------------
function dragStart() {
    console.log("Drag Start Called");
    currentDraggedElement = this;
    console.log(currentDraggedElement);
}

function dragOver(event) {
    event.preventDefault();
}

function dragEnter(event) {
    event.preventDefault();
    this.classList.add("hovering");
    console.log("enter")
}

function dragLeave() {
    this.classList.remove("hovering");
}

function drop(event) {
    event.preventDefault();
    this.classList.remove("hovering"); 
    if (this.querySelector(".label")) return;
    this.appendChild(currentDraggedElement);
    currentDraggedElement = null;
}     
//------------------------------------------


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

// event listeners

sounds.forEach(sound => {
    sound.addEventListener("dragstart", dragStart);
});

dropAreas.forEach(area => {
    area.addEventListener("dragover", dragOver);
    area.addEventListener("drop", drop);
});

buttonReset.addEventListener("click", () => {
    document.querySelectorAll(".single-sound").forEach(sound => {
    soundsDiv.appendChild(sound);
    sound.setAttribute("draggable", true);
    });
});            
  
