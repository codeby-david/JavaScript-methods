// CALLBACKS IN Js

// A callback is a function passed as an argument to another function,
// which is then executed later (usually after an asynchronous operation).

// Callbacks were the earliest way to handle async code before Promises and async/await.


// EXAMPLE 1: SIMPLE CALLBACK


function greetUser(name, callback) {
  console.log("Hi", name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greetUser("David", sayBye);//output Hi David


// EXAMPLE 2: CALLBACK WITH A DELAY (ASYNC BEHAVIOR)


function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    console.log(" Data fetched!");
    callback("Here is your data");
  }, 2000);
}

fetchData((data) => {
  console.log("Received:", data);
});


// EXAMPLE 3: CALLBACK HELL (NESTED CALLBACKS)
// Multiple callbacks lead to hard-to-read code (known as callback hell).

function stepOne(callback) {
  setTimeout(() => {
    console.log("Step 1 complete");
    callback();
  }, 1000);
}

function stepTwo(callback) {
  setTimeout(() => {
    console.log("Step 2 complete");
    callback();
  }, 1000);
}

function stepThree(callback) {
  setTimeout(() => {
    console.log("Step 3 complete");
    callback();
  }, 1000);
}

// Nested callbacks (messy structure)
stepOne(() => {
  stepTwo(() => {
    stepThree(() => {
      console.log("All steps done!");
    });
  });
});
