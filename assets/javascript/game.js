window.onload = function (){

var game = {
	wins: 0,
	losses: 0,
	guessesLeft: 10,
	guessesLeftPhrase: "GUESSES" + " " + "LEFT: ",
	options: ["jboog", "bumbaclot", "maryjane", "rastafarian", "di", "dem", "dat", "babylon", "dread", "politricks", "irie", "bwoy", "gal", "pickney", "bredren", "sistren", "jamaica", "reggae", "marley", "bob", "ganja", "hemp", "rebelution", "soja", "iration", ],
	correctLetters: [],
	correctLettersNum: 0,
	wrongLetters: [],
	word: "",
	letterGuessed: "",
	gameOn: false,
	userLetter: null,


	reset: function() {
		// Game on
		this.gameOn = true;
		// goes back to 0
		this.correctLettersNum = 0;
		// why is this set to = null????
		this.word = null;
		// call this function so the word will be generated
		this.generateWord();
		// bad guesses are set back to original amounts
		this.wrongLetters = [];
		// correct guesses are set back to the original amts.
		this.correctLetters	= [];
		// call this function so the "-" show
		this.displayWord();
		// amount is shown within HTML
		document.getElementById("wrongGuess").innerHTML = this.wrongLetters;	
		
		// number of guesses left is reset to 10 with the 2 next codes (I want to adjust the amt of guess based on the word)
		this.guessesLeft = 10;
		document.getElementById("guessesLeft").innerHTML = this.guessesLeftPhrase + this.guessesLeft;	
		// the number is reflected within the HTML
		
		// console.log("reset" + this.word + " " + this.guessesLeft)
	},
		

	generateWord: function() {

		this.word = this.options[Math.floor(Math.random() * this.options.length)].toLowerCase();
		// console.log(generateWord);


	},

	displayWord: function() {
		var wordInProgress = "";
		this.correctLettersNum = 0;
		for (var i = 0; i < this.word.length; i++) {
			if (this.correctLetters.indexOf(this.word.charAt(i)) != -1) {
				// show letter guessed
				wordInProgress = wordInProgress + this.word.charAt(i) + "";
				this.correctLettersNum++;
				}
				else { 
				// show dash, not guessed
				wordInProgress = wordInProgress + "_ "; 
			}
		};
		document.getElementById("currentWord").innerHTML = wordInProgress;
	},



		// How to handle good guesses

	letterGuessed: function() {
		this.displayWord();
		// For new guesses remaining guesses is reduced
		this.guessesLeft--;
		// // We need it to show in the HTML
		document.getElementById("guessesLeft").innerHTML = this.guessesLeftPhrase + this.guessesLeft;
		// Verify if user won (All letters guessed)
		// Could I have looped the display word function????????????????????????????????????
		if (this.correctLettersNum == this.word.length) {
			this.wins++;
			// how amounts shows in html
			document.getElementById("wins").innerHTML = "NUMBER" + " " + "OF" + " " + "WINS: " + this.wins;
			// game shuts off automatically
			this.gameOn = false;
			// can add a song or picture here for effect...
			//if letter was already guessed
			

		}

		// what happens after all guesses are used (Out of Guesses)
		else if (this.guessesLeft == 0) {
			// amt of losses increases by 1
			this.losses++;
			// how it shows in the HTML
			document.getElementById("losses").innerHTML = "NUMBER" + " " + "OF" + " " + "LOSSES: " + this.losses;
			// game shuts off automatically
			this.gameOn = false;
			// can add something bad here for effect
		};

		
	},

	

		// How to handle bad guesses

	letterNotGuessed: function() {
		// wrong letters will show within the html
		document.getElementById("wrongGuess").innerHTML = this.wrongLetters;
		// New guess will reduce amt of availbLe guessES
		this.guessesLeft--;
		// will need to adjust the amt of remaining guesses within HTML
		document.getElementById("guessesLeft").innerHTML = this.guessesLeftPhrase + this.guessesLeft;
		// check if they lost
		if (this.guessesLeft == 0) {
			// Increase Total losses amt.
			this.losses++;
			// Show amt on HTML
			document.getElementById("losses").innerHTML = "NUMBER" + " " + "OF" + " " + "LOSSES: " + this.losses;
			// Turns game off
			this.gameOn = false;

			// can add something here for effect
		};
	},
		// What happens when the user makes a guess
	userGuess: function(userLetterTyped) {
			if (this.gameOn) {
				// Check user guessed the right letter by assessing the indicies
				if ((this.wrongLetters.indexOf(userLetterTyped) < 0 ) && (this.correctLetters.indexOf(userLetterTyped) < 0)) {
					// Determine if the guess was right
					if (this.word.indexOf(userLetterTyped) != -1) {
						// If all criterion above is met then the letter will go out and the function for guessing the correct letter is activated
						this.correctLetters.push(userLetterTyped);
						this.letterGuessed();
					}
					else {
						// how functions alreay written will be executed
						this.wrongLetters.push(userLetterTyped)
						this.letterNotGuessed();
					};
				};
			
			};
	}, 
};//end of object

// By Clicking on the button "New Game" we can reset the game.
document.getElementById("newGame").addEventListener("click", function() {
	game.reset();
});

// by pressing any key a function will be activated
document.onkeyup = function(event) {
	// lowercase letter will show when letter is guessed
	game.userLetter= String.fromCharCode(event.keyCode).toLowerCase();
	// commit event to process function UserGuess
			game.userGuess(game.userLetter);
			// console.log(letterchosen)

}



















































































}; //end of script