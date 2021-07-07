/* 
	Acronyms
	Create a function that, given a string, returns the string’s acronym 
	(first letter of each word capitalized). 
	Do it with .split first if you need to, then try to do it without
*/

const str1 = " there's no free lunch - gotta pay yer way. ";
const expected1 = "TNFL-GPYW";

const str2 = "Live from New York, it's Saturday Night!";
const expected2 = "LFNYISN";

function acronymize(str) {
    // SETUP
	var wordArr = str.split(" ") // turns the str into an array
	var outputStr = ""

    // WORK
	for (var i = 0; i < wordArr.length; i++){
		if (wordArr[i] != ''){
			outputStr += wordArr[i][0]
		}
	}

    // RETURN
	return outputStr.toUpperCase()
}


console.log(acronymize(str1))
console.log(acronymize(str2))


const str1 = " there's no free lunch - gotta pay yer way. ";
const expected1 = "TNFL-GPYW";

const str2 = "Live from New York, it's Saturday Night!";
const expected2 = "LFNYISN";

function acronymizeNoSplit(str) {
    var outputStr = ""

	if(str[0] != ' '){
        outputStr += str[0]
    }
    for (var i = 0; i < str.length; i++){
        if (str[i] == " " && (i + 1) < str.length){
            outputStr += str[i+1]
            }
    }

	return outputStr.toUpperCase()
}

console.log(acronymizeNoSplit(str1))
console.log(acronymizeNoSplit(str2))
/*****************************************************************************/

/* 
	String: Reverse
	Given a string,
	return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

function reverseString(str) {
    var outputStr = ""

    // Loop through str starting at the end
    // append char at I to outputStr -> Pseudocode
    for(var i = str.length - 1; i >= 0; i--){
        outputStr += str[i]
    }

    return outputStr
}

console.log(reverseString(str1))