// JSON.stringify() in JavaScript

// The JSON.stringify() method converts a JavaScript object or array into a JSON string.
// It is commonly used when sending data to a server or storing it in localStorage.

// Syntax-JSON.stringify(value, replacer, space);

// Example 1: Converting a JavaScript object to JSON
const user = {
  name: "David",
  age: 80,
  country: "Kenya"
};

const jsonString = JSON.stringify(user);
console.log(jsonString);
// Output: {"name":"David","age":80,"country":"Kenya"}

// Example 2: Converting an array to JSON
const fruits = ["mango", "banana", "orange"];
const fruitsJSON = JSON.stringify(fruits);
console.log(fruitsJSON);
// Output: ["mango","banana","orange"]

// Example 3: Using space parameter for pretty printing
const prettyJSON = JSON.stringify(user, null, 2);
console.log(prettyJSON);
/*
Output:
{
  "name": "David",
  "age": 80,
  "country": "Kenya"
}
*/

// Example 4: Using a replacer function
// This allows you to control which properties are included in the JSON string
const student = {
  name: "Macharia",
  age: 80,
  password: "12345"
};

const filteredJSON = JSON.stringify(student, (key, value) => {
  if (key === "password") return undefined; // exclude sensitive info
  return value;
});

console.log(filteredJSON);
// Output: {"name":"Macharia","age":80}

// Example 5: Handling Dates
const record = {
  event: "Exam",
  date: new Date("2025-10-18")
};

console.log(JSON.stringify(record));
// Output: {"event":"Exam","date":"2025-10-18T00:00:00.000Z"}
