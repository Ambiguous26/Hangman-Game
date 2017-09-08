// record number of wins users guess correct
// number of times users lost
// must display spaces
// reveal letters when user guesses correct
// show letters users guesses when incorrect (already guessed)
// game should auto choose another word


	alert("Welcome to Reggae Hangman.");

	var options = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
	"a", "s", "d", "f", "g", "h", "j", "k", "l",
	"z", "x", "c", "v", "b", "n", "m"];

	// Anytime user pushes a key this will be recorded as a lowercase
		document.onkeyup = function() {
			var userguess = String.fromCharCode(event.keyCode).toLowerCase();
			console.log(userguess);

		}



	// Array of hangman word/phrase 
	var wordBank = ["jboog", "Bob Marley", "Steven Marley", "Collie Buds"];
	// Creates variables for amount of wins
	var wins = 0;
	// Creates Variable for amount or losses
	var losses = 0;
	// Creates variable for amounts of guesses remaining
	var guessesRemaining = 18;
	// Creates a variable for amounts of guesses
	var guessesMade= "";
	// computer will randomly choose a word
	var hangmanWord = wordBank[Math.floor(Math.random) * computerChoice.length];
	// loop that creates underscores for the mystery word
	var mysteryWord = new Array();
		for (i = 0; i <hangmanWord.length; i++) {
			mysteryWord [i] = "_";
		}

	

	// function chooseWord (){
	// 	random = Math.floor(Math.random()*words.length);


		// var computerChoice = wordOptions [Math.floor(Math.random()=wordOptions.length)];
		
		// 	console.log(wordOptions.length);
// loop below:
	// for (var i=0; i<wordOptions.length; i++) {
	// 	console.log(wordOptions[i])
	// }



// count characters

// function countChars(countfrom,displayto) {
// 	var length = document.getElementByID(countfrom).value.length;
// 	document.getElementByID(displayto).innerHTML = length;
// }