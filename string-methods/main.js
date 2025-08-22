// STRING METHODS


//1.toUpperCase()- Converts all characters or string to uppercase.

let myName = "david"
let uppercaseName = myName.toUpperCase()
console.log(uppercaseName)//DAVID

//2.toLowerCase()- converts all characters or string to lowercase.

let name = "DAVID"
let lowercaseName = myName.toLowerCase()
console.log(lowercaseName)//david


//3.trim()-Removes whitespace (spaces, tabs, newlines) from the beginning and end of a string.
// trimStart() → removes only from the beginning.
// trimEnd() → removes only from the end.   

let language = "    JavaScript  "
let trimmedLanguage = language.trim()
console.log(trimmedLanguage)//JavaScript with no space


//4.split()-Splits a string into an array, based on a specified separator.
let fruitsText = "apple,mango,passion,banana"
let splitText = fruitsText.split(",")
console.log(splitText)//[ 'apple', 'mango', 'passion', 'banana' ]
//if no operator given
let word = "hello"
let splitWord = word.split("")
console.log(splitWord)//[ 'h', 'e', 'l', 'l', 'o' ]


//5.replace()-Replaces a specified value with another in a string

let str1 = "I love swimming"
let str2 = str1.replace("swimming", "JavaScript")
console.log(str2)//I love JavaScript

//To replace all occurrences, use a regular expression with the g flag:
let text = "JS is fun. JS is powerful.";
let result = text.replace(/JS/g, "JavaScript");
console.log(result); // "JavaScript is fun. JavaScript is powerful."

//6.includes()-Checks if a string contains a certain substring. Returns true or false.
let text2 = "Learning JavaScript is fun!";
console.log(text.includes("JavaScript")); // true
console.log(text.includes("Python")); // false


