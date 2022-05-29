const main = document.createElement("div");
main.classList.add("main-container");
document.body.appendChild(main);

const header = document.createElement("header");
header.classList.add("header");

const title = document.createElement("p");
title.classList.add("page-title");
title.innerHTML = "Virtual Piano";
main.appendChild(header);
header.appendChild(title);

const central = document.createElement("main");
central.classList.add("main");
main.appendChild(central);
const buttonsContainer = document.createElement("div");
buttonsContainer.classList.add("buttons");
central.appendChild(buttonsContainer);
const buttonNote = document.createElement("div");
buttonNote.classList.add("button", "notes-button");
buttonNote.setAttribute("id", "notes-button");
buttonNote.innerHTML = "Notes";

const buttonLetters = document.createElement("div");
buttonLetters.classList.add("button", "letter-button", "active-button");
buttonLetters.setAttribute("id", "letter-button");
buttonLetters.innerHTML = "Letter";

buttonsContainer.appendChild(buttonNote);
buttonsContainer.appendChild(buttonLetters);

const keyboard = document.createElement("div");
keyboard.classList.add("keyboard");
central.appendChild(keyboard);

const keysDiv = document.createElement("div");
keysDiv.classList.add("keys");

const whiteKeysAttributes = [
    ["KeyD", "D", "c"],
    ["KeyF", "F", "d"],
    ["KeyG", "G", "e"],
    ["KeyH", "H", "f"],
    ["KeyJ", "J", "j"],
    ["KeyK", "K", "a"],
    ["KeyL", "L", "b"],   
]

function addWhiteKeys(array) {
    array.forEach(elem => {
        const key = document.createElement("div");
        key.classList.add("key");
        key.setAttribute("data-code", elem[0]);
        key.setAttribute("data-letter", elem[1]);
        key.setAttribute("data-note", elem[2]); 
        keysDiv.appendChild(key);
    })
}

addWhiteKeys(whiteKeysAttributes);

const sharpKeysDiv = document.createElement("div");
sharpKeysDiv.classList.add("sharp-keys");

const sharpKeysAttributes = [
    ["KeyR", "R", "c#"],
    ["KeyT", "T", "d#"],
    ["", "", ""],
    ["KeyU", "U", "f#"],
    ["KeyI", "I", "g#"],
    ["KeyO", "O", "a#"],
]

function addSharpKeys(array) {
    array.forEach(elem => {
        const sharpKey = document.createElement("div");
        sharpKey.classList.add("sharp-key");
        sharpKey.setAttribute("data-code", elem[0]);
        sharpKey.setAttribute("data-letter", elem[1]);
        sharpKey.setAttribute("data-note", elem[2]); 
        sharpKeysDiv.appendChild(sharpKey);
    }) 
}

addSharpKeys(sharpKeysAttributes);

keyboard.appendChild(keysDiv);
keyboard.appendChild(sharpKeysDiv);

let isClicked = false;
let activeButton = "notes";
const buttons = document.querySelectorAll(".button");

document.addEventListener("dragstart", function(event) {
    event.preventDefault();
})

//buttons keys-notes 
buttons.forEach(button => button.addEventListener("click", function(event) {
    const keys = document.querySelectorAll(".key");
    const sharpKeys = document.querySelectorAll(".sharp-key"); 
    if (event.target.id === "notes-button" && !event.target.classList.contains("active-button")) {
        keys.forEach( key => key.classList.add("note"));
        sharpKeys.forEach( key => key.classList.add("note"));
    } else

    if (event.target.id === "letter-button" && !event.target.classList.contains("active-button")) {
        keys.forEach( key => key.classList.remove("note"));
        sharpKeys.forEach( key => key.classList.remove("note"));
    }
    
    if (!event.target.classList.contains("active-button")) {
        buttons.forEach(button => button.classList.remove("active-button"));
        event.target.classList.add("active-button");
    } 
    
}))

main.addEventListener("mousedown", function(event) {
    isClicked = true;
    if (event.target.classList.contains("key") 
        || event.target.classList.contains("sharp-key")) {
            let note = event.target.getAttribute("data-code");
            playNote(note);

            if (event.target.classList.contains("sharp-key")) {
                event.target.classList.add("sharp-key-active");
            } else  if (event.target.classList.contains("key")) {
                event.target.classList.add("key-active");
            }
    }

})

main.addEventListener("mouseup", function(event) {
    isClicked = false;

        if (event.target.classList.contains("sharp-key")) {
            event.target.classList.remove("sharp-key-active");
        } else if (event.target.classList.contains("key")){
            event.target.classList.remove("key-active");
        }
});

main.addEventListener("mouseover", function(event) {
    if ((event.target.classList.contains("key") 
        || event.target.classList.contains("sharp-key"))
        && isClicked) {
            let note = event.target.getAttribute("data-code");
            playNote(note);

            if (event.target.classList.contains("sharp-key")) {
                event.target.classList.add("sharp-key-active");
            } else if (event.target.classList.contains("key")) {
                event.target.classList.add("key-active");
            }
        }
})

keyboard.addEventListener("mouseout", function(event) {
    if (event.target.classList.contains("key") 
        || event.target.classList.contains("sharp-key")) {
            event.target.classList.remove("key-active");
            event.target.classList.remove("active");
        }
})


function playNote(note) {
    let sound = new Audio();
    sound.src = `./media/${note}.mp3`;
    sound.play();
}

//рhysical keyboard
const noteNames = [
    "KeyD",
    "KeyF",
    "KeyG",
    "KeyH",
    "KeyJ",
    "KeyK",
    "KeyL",
    "KeyR",
    "KeyT",
    "KeyU",
    "KeyI",
    "KeyO",
]

document.addEventListener("keydown", function(event) {
    if (event.repeat) return;
    noteNames.forEach(noteName => {
        if (noteName === event.code) {
            let currentKey = document.querySelector(`div[data-code=${event.code}]`);
            if (currentKey) {
                if (!currentKey.classList.contains("key-active") 
                || !currentKey.classList.contains("sharp-key-active")) {

                    let note = event.code;
                    playNote(note);

                    if (currentKey.classList.contains("sharp-key")) {
                        currentKey.classList.add("sharp-key-active");
                    } else  if (currentKey.classList.contains("key")) {
                        currentKey.classList.add("key-active");
                    }
                }
            }
        }
    })
})

document.addEventListener("keyup", function(event) {
    let currentKey = document.querySelector(`div[data-code=${event.code}]`);
        if (currentKey) {
            if (currentKey.classList.contains("key-active") 
            || currentKey.classList.contains("sharp-key-active")) {

                if (currentKey.classList.contains("sharp-key-active")) {
                    currentKey.classList.remove("sharp-key-active");
                } else  if (currentKey.classList.contains("key-active")) {
                    currentKey.classList.remove("key-active");
                }
            }
        } 
})