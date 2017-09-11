window.onload = function (){

var game = {
	wins: 0,
	losses: 0,
	guessesLeft: 10,
	options: ["jboog", "bumbleclot", "maryjane", "irate"],
	lettersAllowed: 	["q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
						"a", "s", "d", "f", "g", "h", "j", "k", "l",
						"z", "x", "c", "v", "b", "n", "m"],
	correctLetters: [],
	correctLettersNum: 0,
	wrongLetters: [],
	word: "",
	letterGuessed: "",
	gameOn:false,

	newGame: function() {
		// generate word
	},

	generateWord: function() {
		this.word = this.options[Math.floor(math.random() * this.options.length)].toLowerCase();
	}










};//end of object


















































































}; //end of script