// *** Directions ***
//
// You are compiling a show length calculator for a recording program.
// The lengths of the shows are as follows:
//
// Simpsons: 15 minutes
// NCIS: 30 minutes
// House: 45 minutes
// Office: 60 minutes
// Star Trek: 75 minutes
//
// First, create a function called durationOfEpisodes(shows) which takes a single array
// of show titles and returns their total duration.
//
// Then, write a function shortestRunningPlaylist(showsList) that takes in
// a 2-dimensional array of show titles and returns
// the index of the sub-array with the shortest play time.
//
// Code Goes Here



// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE
//
//
//

const showsA = ['Simpsons', 'NCIS', 'House'];
const showsB = ['House', 'Office', 'Star Trek', 'Star Trek'];
const showsC = ['Simpsons', 'Star Trek', 'Simpsons'];
const showsD = ['House', 'NCIS'];

durationOfEpisodes(showsA);  // 90
durationOfEpisodes(showsB);  // 195
durationOfEpisodes(showsC);  // 105
durationOfEpisodes(showsD);  // 75

mostExpensiveGroceries([showsA, showsB, showsC, showsD]);

let score = 0;

if (durationOfEpisodes(showsA) === 90) score++;
if (durationOfEpisodes(showsB) === 195) score++;
if (durationOfEpisodes(showsC) === 105) score++;
if (durationOfEpisodes(showsD) === 75) score++;

if (shortestRunningPlaylist([showsA, showsB, showsC, showsD]) === 1) score++;
if (shortestRunningPlaylist([showsA, showsD]) === 0) score++;
if (shortestRunningPlaylist([showsA, showsD, showsC]) === 2) score++;

console.log("You have scored " + score + "/7 points.");
