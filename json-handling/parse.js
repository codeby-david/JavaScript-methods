// JSON.parse() in JavaScript

// The JSON.parse() method converts a JSON string into a JavaScript object.
// It's commonly used when receiving data from a web server (since data is often in JSON format).

// Syntax-JSON.parse(jsonString, reviver);

// Example 1: Converting a JSON string into a JavaScript object
const jsonData = '{"name": "David", "age": 80, "country": "Kenya"}';

const parsedData = JSON.parse(jsonData);
console.log(parsedData);
// Output: { name: 'David', age: 80, country: 'Kenya' }

// Accessing individual properties
console.log(parsedData.name);   // David
console.log(parsedData.age);    // 80

// Example 2: Parsing nested JSON
const jsonNested = '{"student": {"name": "Macharia", "score": 95}, "passed": true}';
const obj = JSON.parse(jsonNested);

console.log(obj.student.name);  // Macharia
console.log(obj.passed);        // true

// Example 3: Using the reviver function
// The reviver lets you modify values while parsing
const jsonWithDate = '{"name":"David","joined":"2025-10-18T10:00:00Z"}';

const user = JSON.parse(jsonWithDate, (key, value) => {
  if (key === "joined") return new Date(value); // convert date string to Date object
  return value;
});

console.log(user.joined instanceof Date); // true
console.log(user.joined.toDateString());  // Example output: Sat Oct 18 2025

// Example 4: Handling invalid JSON
try {
  const invalidJSON = "{name: 'David'}"; // Missing quotes around key and value
  JSON.parse(invalidJSON);
} catch (error) {
  console.error("Invalid JSON format:", error.message);
}
