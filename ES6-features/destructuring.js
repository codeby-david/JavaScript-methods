
// ES6 Destructuring Assignment

// Destructuring allows you to extract values from arrays or objects
// into separate variables in a clean and readable way.


// 1. Array Destructuring

const colors = ["red", "green", "blue"];
const [first, second, third] = colors;

console.log(first);  // Output: red
console.log(second); // Output: green

// Skipping elements
const [, , last] = colors;
console.log(last); // Output: blue

// Default values
const [x, y, z = "black"] = ["white", "gray"];
console.log(z); // Output: black


// 2. Object Destructuring

const person = {
  name: "David",
  age: 80,
  country: "Kenya"
};

const { name, age } = person;
console.log(name, age); // Output: David 80

// Renaming variables
const { country: nationality } = person;
console.log(nationality); // Output: Kenya


//  Nested Destructuring

const student = {
  id: 1,
  info: {
    fullName: "John Kariuki",
    course: "Computer Science"
  }
};

const { info: { fullName, course } } = student;
console.log(fullName, course);


//  Function Parameter Destructuring

function showUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

showUser(person); // Output: Name: David, Age: 80
