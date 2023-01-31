// My completely unassisted first draft of JS code with an explanation on what I'm trying to do with Pseudocode/Comment

// Write a function that will have an event listener on the button to target the div to display, when clicked on or hovered on

// const displayDiv = document.querySelector(".reveal");

//    displayDiv.addEventListener("click", dropMenu);

//    function dropMenu() {
//        display = ""
//    }

// displayDiv();
// dropMenu();

// ----------------------------------- //

// Final Draft with researching

// Click event on button to display dropdown menu
const revealingButton = document.querySelector(".revealing-button");
revealingButton.addEventListener("click", function displayMenu() {
    document.getElementById("dropMenu").classList.toggle("show");
});

// Click event on webpage when not on button to hide drop down menu
window.addEventListener("click", function hideMenu(event) {
    if (event.target !== revealingButton) {
        document.getElementById("dropMenu").classList.remove("show");
    }
}); 