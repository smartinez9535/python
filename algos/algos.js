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


/* 
Parens Valid
	Given an str that has parenthesis in it
	return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the underlined ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing


function parensValid(str) {
    var total = 0

    for(var i = 0; i < str.length; i++){
        if(str[i] == "("){
        total++
        for(var x = i + 1; x < str.length; x++){
            if(str[x] == ")"){
            total++
            break;
            }
            else{
            return false;
            }
        }
        }
    }

    if(total % 2 == 0){
        return true;
    }

    else{
        return false;
    }
}

console.log(parensValid(str1))
console.log(parensValid(str2))
console.log(parensValid(str3))

/*****************************************************************************/

/* 
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected1 = true;

const str2 = "D(i{a}l[ t]o)n{e";
const expected2 = false;

const str3 = "A(1)s[O (n]0{t) 0}k";
const expected3 = false;

//This doesn't work for str3
function bracesValid(str) {
    var openArray = []
    var closeArray = []

    for(var i = 0; i < str.length; i++){
        if(str[i] == "("){
        openArray.push(str[i])
        for(var x = i + 1; x < str.length; x++){
            if(str[x] == ")"){
                closeArray.push(str[x])
                break;
        }
            else{
                return false;
            }
        }
    }

    else if(str[i] == "{"){
        openArray.push(str[i])
        for(var x = i + 1; x < str.length; x++){
            if(str[x] == "}"){
                closeArray.push(str[x])
                break;
        }
            else{
                return false;
            }
        }
    }

    else if(str[i] == "["){
        openArray.push(str[i])
        for(var x = i + 1; x < str.length; x++){
            if(str[x] == "]"){
                closeArray.push(str[x])
                break;
            }
            else{
                return false;
            }
        }
    }

    }

    if(openArray.length == closeArray.length){
        return true;
    }

    else{
        return false;
    }
}

//----------------------------------------------------------------------------

/* 
String: Is Palindrome
Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards

Do not ignore spaces, punctuation and capitalization
 */

const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;

//Shawn version, hard to read, other version better
/*
function isPalindromeOneLine(str){
    return str === str.split("").reverse().join("")
}
*/

//Other groups version, very good
function isPalindrome(str){
    for (var i = 0; i <= str.length / 2; i++){
        if (str[i] !== str[str.length - 1 -i]) return false;
    }
    return true;
}

/*Our version
function isPalindromeInefficient(str) {
    var temp;
    var wordsArr = str.split("")
    var last = wordsArr.length - 1
    var reverseString = "";

    for(var i = 0; i < wordsArr.length/2; i++){
        temp = wordsArr[i];
        wordsArr[i] = wordsArr[last];
        wordsArr[last] = temp;
        --last
    }

    for(var i = 0; i < wordsArr.length; i++){
        reverseString = reverseString + wordsArr[i]
    }

    if(reverseString == str){
        return true;
    }

    else{
        return false;
    }
}
*/

console.log(isPalindrome(str1))
console.log(isPalindrome(str2))
console.log(isPalindrome(str3))
console.log(isPalindrome(str4))

/*****************************************************************************/

/* 
    Longest Palindrome
    For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. 
    Strings longer or shorter than complete words are OK.
    All the substrings of "abc" are:
    a, ab, abc, b, bc, c
  */

const str1 = "what up, daddy-o?";
const expected1 = "dad";

const str2 = "uh, not much";
const expected2 = "u";

const str3 = "Yikes! my favorite racecar erupted!";
const expected3 = "e racecar e";

function longestPalindromicSubstring(str) {
    var checkPalen = ""
    var longPalen = False

    //For loop through string
    for(i = 0; i < str.length; i++){
        //Set a starting point to check for long palindrome
        checkPalen = checkPalen + str[i];

        //loop through characters after i
        for(x = i + 1; x < str.length; x++){
            checkPalen = checkPalen + str[x];

            if (str[i] == str[x]){
                longPalen = isPalindrome(checkPalen);

                if(longPalen == true){
                    return checkPalen;
                }

            }
            checkPalen = "";
        }

    }

    return str[0]
}

console.log(longestPalindromicSubstring(str1))
console.log(longestPalindromicSubstring(str2))
console.log(longestPalindromicSubstring(str3))
