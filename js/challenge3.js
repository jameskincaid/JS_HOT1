"use-strict"

function main()
{
const MINLYRIC = 1;
const LYRIC2 = 2;
const MAXLYRIC = 3;

let runAgain = true;
let firstChar = "";
let lyric = 0;

while (runAgain) {
    lyric = parseInt(prompt(`Enter a number between ${MINLYRIC} and ${MAXLYRIC}`, "2"))
    if (isNaN(lyric)) {
        alert(`Enter a number between ${MINLYRIC} and ${MAXLYRIC}`);
    }

    else if ((lyric < MINLYRIC) || (lyric > MAXLYRIC)) {
        alert("You did not enter a valid number");
    }
    else if (lyric === MINLYRIC) {
        alert("One is the loneliest number that you'll ever do");
    }
    else if (lyric === LYRIC2) {
        alert("Two can be as bad as one, It's the loneliest number since the number one");
    }
    else {
        alert("There is no Three");
    }
    firstChar = prompt("Run Again? (Y/N)", "Y")
    firstChar = firstChar.charAt(0).toUpperCase();
    if (firstChar != "Y") {
        runAgain = false;
    }
}
}