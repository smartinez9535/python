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



//----------------------------------------------------------------------------------


/* 
String Encode
You are given a string that may contain sequences of consecutive characters.
Create a function to shorten a string by including the character,
then the number of times it appears. 


If final result is not shorter (such as "bb" => "b2" ),
return the original string.
*/

const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

function encodeStr(str) {
    var count = 1
    var result = ""

    for (var i = 0; i < str.length; i++){
        result += str[i]
        for (var y = i + 1; y < str.length; y++){
        if (str[y] == str[i]){
            count++
        }
        else{
            result += count
            i = y - 1 // if i = y, would i become y+1 on next iteration? Meant to skip to next non-repeated letter
            count = 1
        }
        }
    }
    if (result.length >= str.length){
        return str
    }
    return result;
}

/*****************************************************************************/

/* 
String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

function decodeStr(str) {
    var result = ""

    for (var i = 0; i < str.length; i++){
        if (i % 2 == 0){ //letters will be on even indices
        result += str[i] * parseInt(str[i + 1]) //insert letters into string * the value next to it, this probably doesn't work
        }
    }
    return result
}

/*
const str2 = "a300b2c1d3";

Chris Solution
function decodeStr(str) {
    //setup
    let decoded = "";

    //work
    for (let i = 0; i < str.length; i++) {
        let numStr = str[i]
        //let n = parseInt(str[i])
        // str[i] is a number: n = number
        // str[i] is a letter: n = NaN

        let k = i + 1; -------------->What if number goes over 9
        while (isNumeric(str[k])) {
            numStr += str[k]
            k++
        }

        let n = parseInt(numStr)
        if (n) {
            //when will this statement run? when n = number
            decoded += str[i - 1].repeat(n); // "a".repeat(3) => "aaa"
            // for (let j = 0; j < n; j++) {
                // decoded += str[i - 1];
            }
        }
    }
    //return
    return decoded
}

*/


/*----------------------------------------------------------------------------------------------------------- */

/* 
Given an array of strings
return a sum to represent how many times each array item is found (a frequency table)
Useful methods:
Object.hasOwnProperty("keyName")
    - returns true or false if the object has the key or not
Python: key in dict
*/

const arr1 = ["a", "a", "a"];
const expected1 = {
    a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
    a: 2,
    b: 1,
    c: 3,
    B: 1,
    d: 1,
};

const arr3 = [];
const expected3 = {};

function frequencyTableBuilder(arr) {
    const result = {}

    for (let i = 0; i < arr.length; i++){
        if (result.hasOwnProperty(arr[i])){
            result[arr[i]]++;
        }
        else{
            result[arr[i]] = 1;
        }
    
    }

    return result
}

console.log(frequencyTableBuilder(arr1))
console.log(frequencyTableBuilder(arr2))

/*****************************************************************************/

/* 
Reverse Word Order
Given a string of words (with spaces)
return a new string with words in reverse sequence.
*/

const str1 = "This is a test";
const expected1 = "test a is This";

function reverseWordOrder(wordsStr) {
    const myArr = wordStr.split(" ");
    newArr = "";
    for (var i = myArr.length-1; i > -1; i--){
        newArr += myArr[i]+" ";
    }
    return newArr;
}

console.log(reverseWordOrder(str1))


/*--------------------------------------------------------------------------------------------------- */

/* 
    Given a string,
    return a new string with the duplicates excluded
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

function stringDedupe(str) {
    //var - variable is global when declared in expressions, not functions
    //let - variable is only in the scope it is declared
    //const - scope is same as let, but variable cannot be reassigned
    let distinctString = "";
    const seen = {};

    for(let i = 0; i < str.length; i++){
        //if str[i] key is in the seen object, then it returns the value === true
        //if str[i] key is not in the seen object, then it returns undefined === false
        if (!seen[str[i]]){
            distinctString += str[i];
            seen[str[i]] = true;
        }
    }
    return distinctString;
}

console.log(stringDedupe(str2))




/*****************************************************************************/

/* 
    Given a string containing space separated words
    Reverse each word in the string.
    If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

function reverseWords(str) {
    const words = str.split(" ");
    let wordsReversed = "";

    //in will give the index numbers for an array, the keys for an object
    // of will give the actual values
    for (const word of words){
        let reversedWord = "";

        for (let i = word.length; i >= 0; i--){
            reverseWords += word[i];
        }

        //add a space in front of the word if it's not the first word
        if (wordsReversed.length > 0){
            //when we see an = we are assigning or reassigning a variable
            //reversedWord is going to be overwritten with whatever is on the right side of =
            reversedWord += " " + reversedWord;
        }

        wordsReversed = reversedWord
    }

    return wordsReversed;
}
console.log(reverseWords(str2))

/*----------------------------------------------------------------------------------------------------------- */
const str1 = "Hello World";
const rotateAmnt1 = 0;
//const expected1 = "Hello World";

const str2 = "Hello World";
const rotateAmnt2 = 1;
//const expected2 = "dHello Worl";

const str3 = "Hello World";
const rotateAmnt3 = 2;
//const expected3 = "ldHello Wor";

const str4 = "Hello World";
const rotateAmnt4 = 4;
//const expected4 = "orldHello W";

const str5 = "ABCD";
const rotateAmnt5 = 4;


function rotateStr(str, n) {
    var newstr = '';
    for(var i = str.length - n; i < str.length; i++){
        newstr += str[i];
    }
    for (var i = 0; i < str.length - n; i++){
        newstr += str[i];
    }
    return newstr;
}
console.log(rotateStr(str1, rotateAmnt1))
console.log(rotateStr(str2, rotateAmnt2))
console.log(rotateStr(str3, rotateAmnt3))
console.log(rotateStr(str5, rotateAmnt5))

/*
function rotateStr3(str, n){
    //let frontStr = str.slice(0, str.length - n)
    //let endStr = str.slice(str.length - n, str.length);

    //return endStr + frontStr
    return str.slice(str.length - n, str.length) + str.slice(0,str.length - n)
}
*/

/********************************************************************* */

const strA1 = "ABCD";
const strB1 = "CDAB";
//const expected1 = true;
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated

const strA2 = "ABCD";
const strB2 = "CDBA";
//const expected2 = false;

// -------
function isRotation(s1, s2) {
    let s1Len = s1.length;
    // if S1 == S2, no rotation
    if (s1 == s2) return false;
    
    while (s1Len){
        if (rotateStr(s1, s1Len) == s2){
            return true;
        }
        s1Len --
    }
    return false;
}

console.log(isRotation(strA1, strB1))
console.log(isRotation(strA2, strB2))

/*
function isRotation(s1, s2){
    if (s1.length != s2.length || s1 === s2) return false;

    // .includes() - loops through something and checks to see if a value exists inside it
    return (s1 + s1).includes(s2);
}
*/