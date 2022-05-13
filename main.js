const keyboard = document.querySelector(".keyboard");
const main = document.querySelector(".main-container");
let isClicked = false;

main.addEventListener("mousedown", function(event) {
    isClicked = true;
    if (event.target.classList.contains("key") 
        || event.target.classList.contains("sharp-key")) {
            
            console.log(event.target.getAttribute("data-code"));
            let note = event.target.getAttribute("data-code");
            // let sound = new Audio();
            // sound.src = `./media/${note}.mp3`;
            // sound.play();
            playNote(note);
    }
})

main.addEventListener("mouseup", function(event) {
    isClicked = false;
});

main.addEventListener("mouseover", function(event) {
    console.log(isClicked);
    if ((event.target.classList.contains("key") 
        || event.target.classList.contains("sharp-key"))
        && isClicked) {
            let note = event.target.getAttribute("data-code");
            playNote(note);
        }
})

keyboard.addEventListener("mouseout", function(event) {
    if (event.target.classList.contains("key") 
        || event.target.classList.contains("sharp-key")) {
            console.log("улетели");
        }
})

function playNote(note) {
    let sound = new Audio();
    sound.src = `./media/${note}.mp3`;
    sound.play();
}