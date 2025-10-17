
//  ES6 Arrow Functions

// Arrow functions provide a shorter syntax for writing functions in JavaScript.
// They are always anonymous and do not have their own 'this' binding.


//Basic Syntax

const greet = () => console.log("Hello, world!");
greet(); // Output: Hello, world!


// Arrow Function with Parameters

const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8


// Single Parameter (No Need for Parentheses)
const square = x => x * x;
console.log(square(4)); // Output: 16

// Multi-line Arrow Function (use return)
const multiply = (a, b) => {
  const result = a * b;
  return result;
};
console.log(multiply(3, 4)); // Output: 12


// Returning an Object
const createUser = (name, age) => ({ name, age });
console.log(createUser("David", 20)); // Output: { name: 'David', age: 20 }


// Arrow Functions and 'this'

// Arrow functions don’t have their own 'this'; they use 'this' from the outer scope.

const user = {
  name: "Macharia",
  greet: function () {
    setTimeout(() => {
      console.log(`Hello, ${this.name}`); // 'this' refers to user object
    }, 1000);
  }
};

user.greet();
