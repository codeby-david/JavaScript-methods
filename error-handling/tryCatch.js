
//  tryCatch.js

// Demonstrates how to use try...catch...finally
// to handle errors gracefully.


// Example 1: Handling runtime errors
try {
  console.log("Start of try block");
  let result = someUndefinedVariable + 5; //  ReferenceError
  console.log("This will not run");
} catch (error) {
  console.error("Caught an error:", error.message);
} finally {
  console.log("The finally block always executes.");
}

console.log("Program continues running...");

// Example 2: Nested try-catch


try {
  try {
    JSON.parse("{ bad json }"); //  SyntaxError
  } catch (innerError) {
    console.error("Inner error caught:", innerError.message);
    // Throw it again to be handled by outer catch
    throw innerError;
  }
} catch (outerError) {
  console.error("Outer error handler:", outerError.message);
}


// Example 3: try...catch with functions


function safeJSONParse(data) {
  try {
    return JSON.parse(data);
  } catch (err) {
    console.error("Invalid JSON:", err.message);
    return null; // Return a fallback value
  }
}

const valid = safeJSONParse('{"name": "David"}');
const invalid = safeJSONParse("{name: David}");

console.log("Valid JSON:", valid);
console.log("Invalid JSON:", invalid);
