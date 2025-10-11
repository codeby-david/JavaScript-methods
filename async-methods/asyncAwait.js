//Async/Await was introduced in ES 8(2017) to simplify working with asynchronous code.
//It allows you to write asynchronous operations in a style that looks synchronous.
//Async/Await is built on top of Promises.

//WE HAVE BASIC RULES
// 1️. A function declared with 'async' always returns a Promise.
// 2️.The 'await' keyword can only be used inside an async function.
// 3️.'await' pauses the function execution until the Promise settles (resolved or rejected).

//Examples
async function greet() {
  return "Hello, world!";
}

// The function above automatically returns a Promise.
// Let's use it now
greet().then((message) => console.log(message)); // Output: Hello, world!


// Exapmple Using await to pause execution until the Promise resolves


async function getData() {
  console.log("Fetching data...");

  // Simulating an API request with setTimeout
  let data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(" Data fetched successfully!");
    }, 2000);
  });

  console.log(data);
  console.log("Process complete!");
}

getData();

// Output order:
// Fetching data...
// (waits 2 seconds)
// Data fetched successfully!
// Process complete!


//  ERROR HANDLING WITH try...catch


async function fetchUser() {
  try {
    let response = await fetch("https://api.github.com/users/codeby-david");

    // 'await' pauses until fetch completes
    let data = await response.json();

    console.log(" User:", data.login);
  } catch (error) {
    // This block runs if an error occurs (like network failure)
    console.error("Error fetching user:", error);
  }
}

fetchUser();


//  REAL-WORLD EXAMPLE (Fake API Simulation)


function getUserFromServer() {
  return new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
      if (success) {
        resolve({ name: "David", age: 81 });
      } else {
        reject("Failed to get user!");
      }
    }, 1500);
  });
}

async function displayUser() {
  try {
    console.log("Loading user...");
    const user = await getUserFromServer(); // waits for data
    console.log("User loaded:", user);
  } catch (err) {
    console.error("Error", err);
  }
}

displayUser();


