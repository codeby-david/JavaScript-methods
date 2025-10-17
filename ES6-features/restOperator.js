
// ES6 Rest Operator (...)

// The rest operator collects multiple elements into a single array or object.
// It looks exactly like the spread operator (...), but it works in the opposite direction.
// Spread → expands items
// Rest   → collects items


//  Rest with Arrays (Function Arguments)

// The rest parameter allows a function to accept any number of arguments as an array.

function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3));       // Output: 6
console.log(sum(5, 10, 15, 20)); // Output: 50

//  Rest in Array Destructuring

const fruits = ["apple", "banana", "mango", "orange", "grape"];

const [first, second, ...others] = fruits;
console.log(first);  // Output: apple
console.log(second); // Output: banana
console.log(others); // Output: ['mango', 'orange', 'grape']


//  Rest with Objects

const user = {
  name: "David",
  age: 80,
  country: "Kenya",
  profession: "Developer"
};

const { name, ...details } = user;
console.log(name);    // Output: David
console.log(details); // Output: { age: 80, country: 'Kenya', profession: 'Developer' }

// Combining Spread & Rest

// Spread expands → Rest collects

const numbers = [10, 20, 30, 40, 50];

// Spread: Pass array elements individually
const newNumbers = [...numbers, 60, 70];
console.log(newNumbers); // Output: [10, 20, 30, 40, 50, 60, 70]

// Rest: Collect multiple elements into one variable
const [firstNum, ...remaining] = newNumbers;
console.log(firstNum);   // Output: 10
console.log(remaining);  // Output: [20, 30, 40, 50, 60, 70]


//  Real-life Example

function introduce(firstName, lastName, ...hobbies) {
  console.log(`Name: ${firstName} ${lastName}`);
  console.log(`Hobbies: ${hobbies.join(", ")}`);
}

introduce("Macharia", "David", "Coding", "Reading", "Cycling");
// Output:
// Name: Macharia David
// Hobbies: Coding, Reading, Cycling

// Summary

// - Rest Operator collects multiple values into one array or object.
// - Common uses: function parameters & destructuring.
// - Syntax: (...variableName)
// - Difference:
//   → Spread expands (breaks apart arrays/objects)
//   → Rest collects (gathers items into one variable)
