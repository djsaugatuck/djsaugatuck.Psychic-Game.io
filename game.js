
var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var userGuess = null;


var letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];

document.onkeyup = function(event) {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	if (guessesSoFar.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) {
		guessesSoFar[guessesSoFar.length]=userGuess;
		guessesLeft--;
	}

	if (letterToBeGuessed == userGuess) {
		wins++;
		alert("You won!");
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
		}

	if (guessesLeft == 0) {
		losses++;
		alert("You lost!");
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
		}

	var html = "<p><h1>The Psychic Game</h1></p>" + "<p><h2>Guess what letter I'm thinking of</h2></p>" + "<p><h3>Wins: " + wins + "</h3></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h5>Guesses Left: " + guessesLeft + "</h5></p>" + "<p><h6>Your guesses so far: " + guessesSoFar + "</h6></p>";
	
	document.querySelector("#game").innerHTML = html;

}