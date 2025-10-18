
// throwError.js
// This file demonstrates how to manually throw
// and handle custom errors in JavaScript.


// Example 1: Throwing a simple error
function divideNumbers(a, b) {
  if (b === 0) {
    // Custom error message
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

// Using try-catch to handle the thrown error
try {
  console.log(divideNumbers(10, 0)); //  Throws an error
} catch (error) {
  console.error("Error caught:", error.message);
}


// Example 2: Throwing a custom error type


class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError"; // Custom error name
  }
}

function checkUsername(username) {
  if (username.length < 4) {
    throw new ValidationError("Username must be at least 4 characters long.");
  }
  return "Username is valid!";
}

try {
  console.log(checkUsername("Tom")); //  Too short
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}

console.log("Program continues normally after handling errors.");
