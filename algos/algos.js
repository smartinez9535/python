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

/*--------------------------------------------------------------------------------------------------------------------------------- */

/* 
    An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
    typically using all the original letters exactly once.
    Is there a quick way to determine if they aren't an anagram before spending more time?
    Given two strings
    return whether or not they are anagrams
*/

const strA1 = "yes";
const strB1 = "eys";
const expected1 = true;

const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;

const strA4 = "silent";
const strB4 = "listen";
const expected4 = true;

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

function isAnagram(s1, s2) {
    if (s1.length !== s2.length) return false;

    //frequency tables
    const s1CharFreq = {};
    const s2CharFreq = {};

    for (let i = 0; i < s1.length; i++){
        const s1CharUpper = s1[i].toUpperCase();
        const s2CharUpper = s2[i].toUpperCase();

        if (s1CharFreq.hasOwnProperty(s1CharUpper)){
            s1CharFreq[s1CharUpper]++;
        }
        else{
            s1CharFreq[s1CharUpper] = 1;
        }

        if (s2CharFreq.hasOwnProperty(s2CharUpper)){
            s2CharFreq[s2CharUpper]++;
        }
        else{
            s2CharFreq[s2CharUpper] = 1;
        }
    }

    //compare both tables for same chars and same frequency
    for (const char in s1CharFreq){
        if(!s2.hasOwnProperty(char)) return false;

        if (s1CharFreq[char] !== s2CharFreq[char]) return false;
    }

    /*s1 = s1.toLowercase();
    s2 = s2.toLowercase();

    dict1 = frequencyTableBuilder(s1.split(""))
    dict2 = frequencyTableBuilder(s2.split(""))
        
    for (var i = 0; i < s1.length; i++){
        if (!s2.includes(s1[i])){
            return false
        }
    }
    /*for (let i = 0; i < s1.length; i++){
        if (dict1[s1[i]] != dict2[s1[i]]){
            return false
        }
    }*/
    return true
}

console.log(isAnagram(strA1, strB1))
console.log(isAnagram(strA2, strB2))
console.log(isAnagram(strA3, strB3))

/*****************************************************************************/

/* 
    Given a string that may have extra spaces at the start and the end,
    return a new string that has the extra spaces at the start and the end trimmed (removed)
    do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

function trim(str) {
    let start = 0
    let end = str.length - 1

    while (str[start] == " "){
        start++;
    }

    while (str[end] == " "){
        end--
    }

    return str.slice(start, end + 1)
    /*
    for (let i = 0; i < str.length; i++){
        if (str[i] != " "){
        start = i;
        }
    }
    for (let y = str.length - 1; y >= 0; y--){
        if (str[y] != " "){
        end = y;
        }
    }

    return str.substring(start + 1, end)*/
}

console.log(trim(str1))

/* --------------------------------------------------------------------------------------------------*/

/* 
    Balance Point
    Write a function that returns whether the given
    array has a balance point BETWEEN indices, 
    where one side’s sum is equal to the other’s. 
*/

const nums1 = [1, 2, 3, 4, 10];
const expected1 = true;
// Explanation: between indices 3 & 4

const nums2 = [1, 2, 4, 2, 1];
const expected2 = false;

/*
function balancePoint(nums){
    
    let rightSum = 0;
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        rightSum += nums[i];
    }
    for (let j = 0; j < nums.length; j++) {
        leftSum += nums[j];
        rightSum -= nums[j];
        if (leftSum === rightSum) {
        return true;
        }
        
    }
    return false;
}

console.log(balancePoint(nums1))
console.log(balancePoint(nums2))*/


//----------Shawn Answer 1------------------------/

function balancePoint(nums){
    //fixing the length
    //nums.length calculates the length each time
    // what if our algo changes the length of the num
    const len = nums.length;

    if (len < 2) {
        return false;
    }

    let leftSum = nums[0];
    let rightSum = 0;

    for (let i = 0; i < len; i++){
        rightSum += nums[i]
    }

    for (let i = 1; i < len; i++){
        if (leftSum === rightSum) return true;

        rightSum -= nums[i];
        leftSum += nums[i];
    }

    return false;
}

/*****************************************************************************/

/* 
    Balance Index
    Here, a balance point is ON an index, not between indices.
    Return the balance index where sums are equal on either side
    (exclude its own value).
    
    Return -1 if none exist.
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

/*
function balanceIndex(nums){
    if (nums.length < 3) return -1;
    
    let rightSum = 0;
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        rightSum += nums[i];
    }
    for (let j = 0; j < nums.length; j++) {
        rightSum -= nums[j];
        if (leftSum === rightSum) {
        return j;
        }
        leftSum += nums[j];
    }
    return -1;
}

console.log(balanceIndex(nums1))
console.log(balanceIndex(nums2))*/


//----------Shawn Answer 2------------------------/

function balanceIndex(nums){
    //fixing the length
    //nums.length calculates the length each time
    // what if our algo changes the length of the num
    const len = nums.length;

    if (len < 3) {
        return false;
    }

    let leftSum = nums[0];
    let rightSum = 0;

    for (let i = 0; i < len; i++){
        rightSum += nums[i]
    }

    for (let i = 1; i < len; i++){
        if (leftSum === rightSum) return true;

        rightSum -= nums[i + 1];
        leftSum += nums[i];
    }

    return false;
}

/*------------------------------------------------------------------------------------------------------------- */

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

function binarySearch(sortedNums, searchNum) {
    let start_index = 0;
    let end_index = sortedNums.length - 1;

    while (start_index <= end_index){
        let middle_index = Math.floor((start_index + end_index)/2)
        if (sortedNums[middle_index] == searchNum){
            return true;
        }

        else if (sortedNums[middle_index] > searchNum){
            end_index = middle_index - 1;
        }

        else if (sortedNums[middle_index] < searchNum){
            start_index = middle_index + 1;
        }
    }
    return false
}

console.log(binarySearch(nums1, searchNum1))
console.log(binarySearch(nums2, searchNum2))
console.log(binarySearch(nums3, searchNum3))


/*---------------------------------------------------------------------------------------------------------------- */

/* 
    Given a SORTED array of integers, dedupe the array 
    Because array elements are already in order, all duplicate values will be grouped together.
    Ok to use a new array
    Bonus: do it in O(n) time (no nested loops, new array ok)
*/

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

function dedupeSorted(nums) {
    let uniqueArr = []; // We need to create a new array because the expected outcome is an array
    
    // Loop through the array
    for(let i of nums) { 
        console.log(i) // Checking to see what i is as it loops through the nums array
        if(uniqueArr.indexOf(i) === -1) { // indexOf() function will return -1 if the value isn't found in the new array. So indexOf(1) will return -1.
            uniqueArr.push(i); // If the indexOf(i) is === to -1 we push that value i into our new array
        }
    }
    return uniqueArr; // Returns the new array with pushed values
}   

console.log(dedupeSorted(nums1))
console.log(dedupeSorted(nums2))
console.log(dedupeSorted(nums3))

/* Chris Solution
function dedupeSorted(nums){
    let newArr = []; 
    
    for(let i = 0; i < nums.length; i++){ 
        if(nums[i] !== newArray[newArray.length]){ 
            newArray.push(nums[1])
        }
    }
    return newArr;
}   
*/

/*****************************************************************************/

/* 
    Array: Mode
    
    Create a function that, given an array of ints,
    returns the int that occurs most frequently in the array.
    What if there are multiple items that occur the same number of time?
        - return all of them (in an array)
    - what if all items occur the same number of times?
    - return empty array
*/

const nums1 = [];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const nums4 = [5, 1, 4, 1];
const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];
//  - order doesn't matter

function mode(nums){
    let newArr = [];
    let map = {};
    let highest = 0;
    let all_same_freq = true;

    if(nums.length < 1){
        return nums;
    }

    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]]){
            map[nums[i]]++;
        }
        
        else if(map[nums[i]] > highest){
            highest = map[nums[i]]
        }

        else{
            map[nums[i]] = 1
        }

        
    }

    for (key in map){
        if(map[key] == highest){
            newArr.push(parseInt(key));
        }

        else{
            all_same_freq = false;
        }
    }
    return all_same_freq ? [] : newArr;
}


/*----------------------------------------------------------------------------------------- */



/* 
    Given an int to represent how much change is needed
    calculate the fewest number of coins needed to create that change,
    using the standard US denominations
    */

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/*
function fewestCoinChange(cents) {
    let dict = {}

    while (cents > 0){
        if (cents >= 25){
        cents = cents - 25;

            if (!("quarter" in dict)){
                dict.quarter = 1;
            }

            else{
                dict.quarter += 1;
            }
        }

        else if (cents >= 10){
            cents = cents - 10;

            if (!("dime" in dict)){
                dict.dime = 1;
            }

            else{
            dict.dime += 1;
            }
        }

        else if (cents >= 5){
            cents = cents - 5;

            if (!("nickel" in dict)){
            dict.nickel = 1;
            }

            else{
            dict.nickel += 1;
            }
        }

        else if (cents >= 1){
            cents = cents - 1;

            if (!("penny" in dict)){
            dict.penny = 1;
            }

            else{
            dict.penny += 1;
            }
        }
    }

    return dict;
}*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };


function fewestCoinChange(cents) {
    let coinsDict = {}
    if(cents != 0 && cents / 25 >= 1) {
        coinsDict.quarter = Math.floor(cents / 25)
        cents %= 25;
    }
    if(cents != 0 && cents / 10 >= 1) {
        coinsDict.dimes = Math.floor(cents / 10)
        cents %= 10;
    }
    if(cents != 0 && cents / 5 >= 1) {
        coinsDict.nickle = Math.floor(cents / 5)
        cents %= 5;
    }
    if(cents != 0) {
        coinsDict.penny = cents
    }
    return coinsDict;
}

console.log(fewestCoinChange(cents1))
console.log(fewestCoinChange(cents2))
console.log(fewestCoinChange(cents3))
console.log(fewestCoinChange(cents4))

/*****************************************************************************/

    /* 
    Missing Value
    You are given an array of length N that contains, in no particular order,
    integers from 0 to N . One integer value is missing.
    Quickly determine and return the missing value.
    */

const nums1 = [3, 0, 1];
const expected1 = 2;

const nums2 = [3, 0, 1, 2];
const expected2 = null;
// Explanation: nothing is missing

function missingValue(unorderedNums) {
    for(let i = 0; i < unorderedNums.length; i++) {
        if(unorderedNums.sort()[i] != i)
        return i;
    }
    return null;
}

console.log(missingValue(nums1))
console.log(missingValue(nums2))

/*----------------------------------------------------------------------------------------- */

function mutlArr(arr){
    // BASE CASE
    if (arr.length < 2) return arr[0]
    // FORWARD PROGRESS
    //RECURSIVE CALL

    num = arr[0] // first thing in the arr
    newArr = arr.slice(1, arr.length) // grabbing everything else

    return num * mutlArr(newArr)
}

/* 
    Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

function sumArr(nums, sum = 0) {
  // BASE CASE
    if (nums.length == 0) return sum;
  // RECURSIVE CALL
  // pop out the first num in nums: nums.slice(1)
    return sumArr(nums.slice(1), (sum += nums[0]));
}

console.log(sumArr(nums1))

/*****************************************************************************/

/* 
    Recursive Sigma
    Input: integer
    Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;
/*
function recursiveSigma(num, sum = Math.floor(num)) {
    // base case:
    num = parseInt(num)
    if (isNaN(num)) return null;
    if (num < 1) return 0
    if (num == 0) return sum

    // recursion
    return recursiveSigma(num -= 1, sum += num)
}*/

function recursiveSigma(num) {
    // Edge cases and setup
    const n = parseInt(num) // convert floats to integers
    if (isNaN(num)) return null; // if the num was not a number, return null

    //Base Case
    if (num < 1) return 0

    // recursion
    return n + recursiveSigma(n-1)
}


console.log(recursiveSigma(num2))

/*----------------------------------------------------------------------------------- */

/* 
    Recursive Factorial
    Input: integer
    Output: integer, product of ints from 1 up to given integer
    
    If less than zero, treat as zero.
    Bonus: If not integer, truncate (remove decimals).
    
    Experts tell us 0! is 1.
    
    rFact(3) = 6 (1*2*3)
    rFact(6.8) = 720 (1*2*3*4*5*6)
*/

const num1 = 3;
const expected1 = 6;
// Explanation: 1*2*3 = 6

const num2 = 6.8;
const expected2 = 720;
// Explanation: 1*2*3*4*5*6 = 720

const num3 = 0;
const expected3 = 1;

function factorial(n) {
    const num = parseInt(n) // convert floats to integers
    if (isNaN(num)) return null; // if the num was not a number, return null

    //Base Case
    if (num <= 0) return 1

    // recursion
    return num * factorial(n-1)
}

console.log(factorial(num2))

/*****************************************************************************/

/* 
    Return the fibonacci number at the nth position, recursively.
    
    Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
    The next number is found by adding up the two numbers before it,
    starting with 0 and 1 as the first two numbers of the sequence.
*/

const num1 = 0;
const expected1 = 0;

const num2 = 1;
const expected2 = 1;

const num3 = 2;
const expected3 = 1;

const num4 = 3;
const expected4 = 2;

const num5 = 4;
const expected5 = 3;

const num6 = 8;
const expected6 = 21;

/*
let arr = [0, 1]

function fibonacci(num) {
    
    if (arr[num] != undefined){
        let n = arr[num]
        arr = [0, 1]
        return n
    }

    arr.push(arr[arr.length-1] + arr[arr.length-2])
    //console.log(arr)
    return fibonacci(num)
}*/

// very unoptimized, use fibmemo
function fibonacci(num) {
    
    if(num <= 1){
        return num;
    }
    return fibonacci(num-1) + fibonacci(num-2)
}

console.log(fibonacci(num6))

// USE THIS ONE
function fibMemo(n, memo = {0: 0, 1: 1}){
    //edge case
    if (n < 0) return null;

    // base case
    if (memo[n] !== undefined) return memo[n];

    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);

    return memo[n];
}


/*----------------------------------------------------------------------- */

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

function binarySearch(sortedNums, searchNum) {
    let start_index = 0;
    let end_index = sortedNums.length - 1;
    let middle_index = Math.floor((start_index + end_index)/2)
    console.log(sortedNums)

    if (start_index > end_index || sortedNums.length < 1) return false;

    if (sortedNums[middle_index] == searchNum){
        return true;
    }

    else if (sortedNums[middle_index] > searchNum){
        newNums = sortedNums.slice(0, middle_index)
    }

    else{
        newNums = sortedNums.slice(middle_index + 1);
    }

    return binarySearch(newNums, searchNum);
}

console.log(binarySearch(nums1, 4))
console.log(binarySearch(nums2, searchNum2))
console.log(binarySearch(nums3, 3))

/*
function binarySearch(sortedNums, searchNum) {
    let left = 0,
    right = sortedNums.length - 1;
    // base case
    if (left > right) return false;

    let midIdx = Math.floor((left + right) / 2);
    // if find searchNum, return true
    // if searchNum in the left part, search left part
    // if searchNum in the right part, search right part
    if (sortedNums[midIdx] === searchNum) {
        return true;
    } 

    else if (searchNum < sortedNums[midIdx]) {
        return binarySearch(sortedNums.slice(0, midIdx), searchNum);
    } 
    
    else {
        return binarySearch(sortedNums.slice(midIdx + 1), searchNum);
    }
}*/


function binarySearchIndexes(sortedNums, searchNum, leftIdx = 0, rightIdx = sortedNums.length - 1){
    // BASE CASE
    if (leftIdx > rightIdx) return false;

    const midIdx = Math.floor((leftIdx + rightIdx) / 2);

    if (sortedNums[midIdx] === searchNum) return true;

    if (searchNum < sortedNums[midIdx]){
        return binarySearchIndexes(sortedNums, searchNum, 0, midIdx - 1);
    }

    else{
        return binarySearchIndexes(sortedNums, searchNum, midIdx + 1, rightIdx);
    }
}


/*------------------------------------------------------------------------------------------------------ */


/* 
    Recursively reverse a string
    helpful methods:
    str.slice(beginIndex[, endIndex])
    returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

function reverseStr(str) {

    if (str.length <= 1) return str;

    //if (str.length == 1) return str[0];

    tempStr = str.slice(0, str.length - 1)
    //console.log(tempStr)
    return (str[str.length - 1] + reverseStr(tempStr))
}

console.log(reverseStr(str1))
console.log(reverseStr(str2))

/*****************************************************************************/

/*
    Sum To One Digit
    Implement a function sumToOne(num)​ that,
    given a number, sums that number’s digits
    repeatedly until the sum is only one digit. Return
    that final one digit result.
    Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

const num4 = 57;
const expected4 = 3;

const num5 = 888;
const expected5 = 6;

const test = 11111;

const num6 = "hello there";
const expected6 = null;


function sumToOneDigit(num) {
    
    if(isNaN(parseInt(num))) return null;

    numStr = num.toString()
    //console.log(numStr.length)

    if (numStr.length == 1) return parseInt(numStr);

    solution = (parseInt(numStr[0]) + (sumToOneDigit(numStr.slice(1))))

    if (solution.toString().length > 1){
        sumToOneDigit(solution)
    }

    return solution
}

console.log(sumToOneDigit(num1))
console.log(sumToOneDigit(num2))
console.log(sumToOneDigit(num3))
console.log(sumToOneDigit(num4))
console.log(sumToOneDigit(num5))
console.log(sumToOneDigit(test))
console.log(sumToOneDigit(num6))

// This is more efficient
function sum(n){
    if(isNaN(parseInt(n))) return null;

    //BASE CASE
    if (n < 10) return n;

    const strNum = n.toString();
    let sum = 0;

    for (const strDigit of strNum){
        sum += parseInt(strDigit)
    }

    return sumToOneDigit(sum);
}


/*---------------------------------------------------------------------------------------- */

/*
    Given an array nested with unknown amount of arrays,
    return the integers all under ONE array.
    */

const arr1 = [1, 2, 3, 4, 5, 6];
const expected1 = [1, 2, 3, 4, 5, 6];

const arr2 = [1, 2, [4, 5], 6];
const expected2 = [1, 2, 4, 5, 6];

const arr3 = [1, 2, [3, 4, [5]], 6];
const expected3 = [1, 2, 3, 4, 5, 6];

/* 
    Two useful built in functions:
    Array.isArray() : returns true if argument is an array
    - Array.isArray([1, 2, 3]) => true
    - Array.isArray([4, 5, 6]) => true
    - Array.isArray(1) => false
    
    Array.concat() : concatenates two arrays together
    - arr1.concat(arr2) => [1, 2, 3, 4, 5, 6, 1, 2, [4, 5], 6]
*/

function recursiveFlatten(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i]) == true){
            result = result.concat(recursiveFlatten(arr[i]))
        }

        else{
            result.push(arr[i])
        }
    }
    return result
}

console.log(recursiveFlatten(arr1))
console.log(recursiveFlatten(arr2))
console.log(recursiveFlatten(arr3))
