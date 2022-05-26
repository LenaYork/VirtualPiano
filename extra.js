main.addEventListener("mouseup", function(event) {
    isClicked = false;

    if (event.target.classList.contains("key") 
        || event.target.classList.contains("sharp-key")) {

            if (event.target.classList.contains("sharp-key")) {
                event.target.classList.remove("sharp-key-active");
            } else {
                event.target.classList.remove("key-active");
            }
        }
});

main.addEventListener("mouseover", function(event) {
    // console.log(isClicked);
    if ((event.target.classList.contains("key") 
        || event.target.classList.contains("sharp-key"))
        && isClicked) {
            let note = event.target.getAttribute("data-code");
            playNote(note);
        }
})



main.addEventListener("mouseup", function(event) {
    isClicked = false;

    if (event.target.classList.contains("key") 
        || event.target.classList.contains("sharp-key")) {

            if (event.target.classList.contains("sharp-key")) {
                event.target.classList.remove("sharp-key-active");
            } else {
                event.target.classList.remove("key-active");
            }
        }
});

main.addEventListener("mousedown", function(event) {
    isClicked = true;
    if (event.target.classList.contains("key") 
        || event.target.classList.contains("sharp-key")) {
            
            console.log(event.target.getAttribute("data-code"));
            let note = event.target.getAttribute("data-code");
            playNote(note);

            if (event.target.classList.contains("sharp-key")) {
                event.target.classList.add("sharp-key-active");
            } else
 

            
    }

})