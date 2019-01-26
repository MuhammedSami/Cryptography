/**
*	Ceaser Cipher For fun	
**/
class CeaserCipher{
	constructor(toCrypte,crypteNumber){
		this.word      = toCrypte;
		this.cryptekey = crypteNumber;
		this.decrypte  = false;
		this.toDecrypte = "";
	}

	createAlphabet() {
		let alphabet = [];
		let start = "a".charCodeAt(0);
		let end   = "z".charCodeAt(0);

		for(let i =start; i<=end; i++){
			alphabet.push(String.fromCharCode(i));
		}

		return alphabet;
	}

	crypte() {
		let wordLength  = this.word.length;
		let cryptedWord = "";

		for( let i=0; i<wordLength; i++ ){
			if(this.word[i] == ' ' ) {
				cryptedWord += '1';	
			}
			else
				cryptedWord +=this.getLetterToCrypte(this.word[i]);
		}
		this.toDecrypte = cryptedWord;

		this.decrypte = confirm("There your crypted word '"+cryptedWord+"'. Do you want me to decrypte it?");
		if(this.decrypte === true)
			this.decrypteText(cryptedWord);
	}

	getLetterToCrypte(letter) {
		let getArray = this.createAlphabet();
		let indexNumber = getArray.indexOf(letter)+parseInt(this.cryptekey);

		if( indexNumber >= getArray.length ) {
			let indexOfTheLetter = getArray.indexOf(letter);
			let newIndex = indexNumber - getArray.length;
			return getArray[newIndex];
		}
		else{
			return getArray[indexNumber];
		}
	}

	getLettertoDecrypte(letter) {
		let getArray = this.createAlphabet();
		let indexNumber = getArray.indexOf(letter)-parseInt(this.cryptekey);
		let space = ' ';

		if( letter == '1')
			return space;

		if(  parseInt(this.cryptekey) > getArray.indexOf(letter) ) {
			let indexOfTheLetter = parseInt(this.cryptekey)- getArray.indexOf(letter);

			return getArray[(getArray.length - indexOfTheLetter)];
		}
		else{
			return getArray[indexNumber];
		}
			
	}

	decrypteText(cryptedWord){
		let textBefore = "";

		for(let i=0; i < this.toDecrypte.length; i++ ) {
			textBefore +=this.getLettertoDecrypte(this.toDecrypte[i]);
		}
		alert("Your decrypted Lettre :"+textBefore);
	}
}

var text = prompt("Text to Crypte");
var a 	 = prompt("Give me The crypte number");

const list = new CeaserCipher(text,a);
list.crypte();

