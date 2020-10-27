"use-strict"

function main()
{
const MINAGE = 1;
const MAXAGE = 200;
const VERIFIED = 21;

let runAgain = true;
let firstChar = "";
let age = 0;

while (runAgain) {
     age = parseInt(prompt(`Enter your age`, "30"));
     if (isNaN(age)) {
         alert("Please enter your age!")
         age = parseInt(prompt(`Enter your age`, "30"));
     }
else if ((age < MINAGE) || (age > MAXAGE)) {
    alert("Age out of range!");
    age = parseInt(prompt(`Enter your age`, "30"));
    }
else if (age < VERIFIED) {
    alert("You're not old enough!")
    }
else {
    alert("Welcome to the venue!")
}
firstChar = prompt("Run Program Again???  (Y/N)", "Y");
firstChar = firstChar.charAt(0).toUpperCase();
if (firstChar != "Y") {
    runAgain = false;
}
}
}