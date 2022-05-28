const keyboard = document.querySelector(".keyboard");
const main = document.querySelector(".main-container");
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

//работа клавиш физической клавиатуры

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