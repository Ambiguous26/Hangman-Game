// record number of wins users guess correct
// number of times users lost
// must display spaces
// reveal letters when user guesses correct
// show letters users guesses when incorrect (already guessed)
// # of guess remaining
// game should auto choose another word

	alert("Welcome to Reggae Hangman.");	
	var options = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
	"a", "s", "d", "f", "g", "h", "j", "k", "l",
	"z", "x", "c", "v", "b", "n", "m"];

	var words = ["jboog", "Bob Marley", "Steven Marley", "Collie Buds"];
	var random=0;
	varnumWrong = 0;
	var numRight = 0;
	var numRemainingGuesses = 0;



	document.onkeyup = function() {
		var userguess = String.fromCharCode(event.keyCode).
			// makes sure user enters in lowercase
			toLowerCase();


			console.log(userguess);
		
	function chooseWord (){
		random = Math.floor(Math.random()*words.length);

	}
		// var computerChoice = wordOptions [Math.floor(Math.random()=wordOptions.length)];
		
		// 	console.log(wordOptions.length);
// loop below:
	// for (var i=0; i<wordOptions.length; i++) {
	// 	console.log(wordOptions[i])
	// }


	}

// count characters

// function countChars(countfrom,displayto) {
// 	var length = document.getElementByID(countfrom).value.length;
// 	document.getElementByID(displayto).innerHTML = length;
// }