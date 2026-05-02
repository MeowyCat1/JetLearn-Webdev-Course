let attempts = 0;
const correctbutton = document.getElementById("correct");
let count = document.getElementById("count");
let smiley = document.getElementById("smiley");
let found = false;
header = document.getElementById("header")
function changesmiley() {
    smiley.src = "smiley.png";
    smiley.alt = "A smiley face";
    found = true;
    header.innerText ="You found it!";
}
function wrong() {
    if (found == false) {
        attempts += 1;
        count.innerText = attempts
    };
}