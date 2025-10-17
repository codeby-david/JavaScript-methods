
//  ES6 Template Literals

// Template literals use backticks (`) to embed expressions, variables, and multiline strings.


//  Basic Usage

const name = "David";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, David!


//  Expression Interpolation

const a = 5;
const b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}.`);
// Output: The sum of 5 and 10 is 15.


// Multi-line Strings

const message = `
My name is David.
I love JS.
I also love somebody haha.
`;
console.log(message);


//  Embedding Function Calls

function toUpper(text) {
  return text.toUpperCase();
}

console.log(`David: ${toUpper("macharia")}`);
// Output: David: MACHARIA


//  Tagged Templates (Advanced)

// You can create custom functions to process template literals.

function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) => `${result}${str}${values[i] ? `**${values[i]}**` : ""}`,
    ""
  );
}

const user = "Jane";
const lang = "Me";
console.log(highlight`User ${user} loves ${lang}`);
// Output: User **Jane** loves **Me**
