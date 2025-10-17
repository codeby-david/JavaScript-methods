
//  JavaScript Timing Methods

// JavaScript provides built-in timing functions that allow you to 
// delay or repeatedly execute code after a given time interval.
// These are asynchronous and handled by the browser’s Web APIs.

// The two main timing methods are:
// 1. setTimeout() → Runs a function once after a delay.
// 2. setInterval() → Runs a function repeatedly after each interval.


// setTimeout()

// Executes a function once after a specified delay (in milliseconds).

console.log("Hello world");

setTimeout(() => {
  console.log("This message appears after 2 seconds!");
}, 2000);

console.log("End");

// Output:
// Hello world
// End
// This message appears after 2 seconds!




// Passing Arguments to setTimeout()


function greet(name) {
  console.log(`Hello, ${name}!`);
}

setTimeout(greet, 1500, "David");
// After 1.5 seconds → Hello, David!



//  Canceling a Timeout

// Use clearTimeout() to cancel a scheduled timeout.

const timeoutId = setTimeout(() => {
  console.log("You will not see this message.");
}, 3000);

clearTimeout(timeoutId);
// Timeout canceled before execution.




//  setInterval()

// Repeats a function continuously after a specified delay.

let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log(`Count: ${count}`);

  if (count === 5) {
    clearInterval(intervalId);
    console.log("Interval stopped!");
  }
}, 1000);

// Output:
// Count: 1
// Count: 2
// Count: 3
// Count: 4
// Count: 5
// Interval stopped!



//  clearInterval()

// Stops an interval from repeating.

let number = 0;

const repeat = setInterval(() => {
  console.log("Repeating task...");
  number++;

  if (number === 3) {
    clearInterval(repeat);
    console.log("Stopped repeating!");
  }
}, 2000);




//  setTimeout vs setInterval


// setTimeout() → Executes once after the specified delay.
// setInterval() → Executes repeatedly after each interval.

// Example: Using setTimeout() recursively (safer alternative to setInterval)
let counter = 0;

function repeatWithTimeout() {
  counter++;
  console.log(`Timeout Counter: ${counter}`);

  if (counter < 3) {
    setTimeout(repeatWithTimeout, 1500);
  } else {
    console.log("Finished repeating with setTimeout!");
  }
}

repeatWithTimeout();




//  Example: Simulating a Countdown


let countdown = 5;

const timer = setInterval(() => {
  console.log(`Countdown: ${countdown}`);
  countdown--;

  if (countdown < 0) {
    clearInterval(timer);
    console.log("Launch!");
  }
}, 1000);



// Summary

// setTimeout(fn, delay) → Executes a function once after delay.
// clearTimeout(id) → Cancels a timeout.
// setInterval(fn, delay) → Repeats a function every delay.
// clearInterval(id) → Stops a repeating interval.
// Both are asynchronous and managed by the browser’s event loop.
