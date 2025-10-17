
//  ES6 Spread Operator (...)

// The spread operator expands elements of an array or object.
// It is used to copy, merge, or pass elements easily.


//  Spread with Arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5]

// Copying arrays
const copy = [...arr1];
console.log(copy); // Output: [1, 2, 3]


//  Spread with Objects

const user = { name: "David", age: 80 };
const updatedUser = { ...user, country: "Kenya" };
console.log(updatedUser);
// Output: { name: "David", age: 80, country: "Kenya" }


//  Spread in Function Calls

function sum(a, b, c) {
  return a + b + c;
}

const numbers = [10, 20, 30];
console.log(sum(...numbers)); // Output: 60


// Combining and Overriding Properties

const defaultSettings = { theme: "light", notifications: true };
const userSettings = { theme: "dark" };

const finalSettings = { ...defaultSettings, ...userSettings };
console.log(finalSettings);
// Output: { theme: 'dark', notifications: true }
