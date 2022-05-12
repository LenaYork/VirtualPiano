const keyboard = document.querySelector(".keyboard");
keyboard.addEventListener("click", function(event) {
    if (event.target.classList.contains("key") 
        || event.target.classList.contains("sharp-key")) {
            console.log(event.target.getAttribute("data-code"));
            let note = event.target.getAttribute("data-code");
            let sound = new Audio();
            sound.src = `./media/${note}.mp3`;
            sound.play();
    }
})