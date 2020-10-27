"use-strict"

function main()

{
const favoriteMovies = new Array(3);
let runAgain = true;
let favoriteMoviesstr = "";

while (runAgain) {
    favoriteMoviesstr = "";
    for (let lcv = 0; lcv < favoriteMovies.length; ++lcv) {
        favoriteMovies[lcv] = prompt("Please enter your favorite movie" + (lcv + 1),"Hardcore Henry");
        favoriteMoviesstr += ("Favorite Movie" + (lcv + 1) + "was " + favoriteMovies[lcv]) + "\n";

    }

    alert(favoriteMoviesstr);

    firstChar = prompt("Run again? (Y/N)", "Y");
    firstChar = firstChar.charAt(0).toUpperCase();
    if (firstChar != "Y") {
        runAgain = false;
    }

}
}