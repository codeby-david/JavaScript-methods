
// A Promise is a special JavaScript object that represents a value
// which may be available now, later, or never.
// Promises make handling asynchronous tasks easier and help avoid "callback hell".

// A Promise can be in one of three states:
// 1.Pending → The operation has not completed yet.
// 2.Fulfilled → The operation completed successfully (resolved).
// 3. Rejected → The operation failed (rejected).



// CREATING A SIMPLE PROMISE


const myPromise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve(" Operation successful!");
    } else {
      reject(" Something went wrong!");
    }
  }, 2000);
});

// Handling the Promise result
myPromise
  .then((result) => console.log(result))   // Runs if resolved
  .catch((error) => console.log(error))   // Runs if rejected
  .finally(() => console.log("Completed!")); // Always runs


//  WHY USE PROMISES?

// Without promises, we would need nested callbacks (callback hell).
// Promises flatten that structure, making async code easier to read and maintain.



//  EXAMPLE: Simulating a Network Request

function fetchUserData() {
  return new Promise((resolve, reject) => {
    console.log(" Fetching user...");
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({ name: "David", role: "Developer" });
      } else {
        reject("Failed to fetch user!");
      }
    }, 1500);
  });
}

// Consuming the Promise
fetchUserData()
  .then((user) => {
    console.log("User fetched:", user);
    return `${user.name} is a ${user.role}`;
  })
  .then((message) => {
    console.log("Message:", message);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    console.log("Fetch attempt finished.");
  });


// CHAINING PROMISES
// You can chain multiple .then() calls to perform sequential async operations.

function stepOne() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 1 "), 1000);
  });
}

function stepTwo() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 2 "), 1000);
  });
}

function stepThree() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Step 3 "), 1000);
  });
}

stepOne()
  .then((result) => {
    console.log(result);
    return stepTwo();
  })
  .then((result) => {
    console.log(result);
    return stepThree();
  })
  .then((result) => {
    console.log(result);
    console.log(" All steps complete!");
  });

// Promise.all()
// Runs multiple promises in parallel and waits for all to complete.

const promise1 = Promise.resolve("Apple");
const promise2 = Promise.resolve("Banana");
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve(" Grape"), 1000)
);

Promise.all([promise1, promise2, promise3]).then((values) =>
  console.log("All fruits:", values)
);


// Promise.race()

// Returns the result of the first promise that settles (fulfilled or rejected).

const slow = new Promise((resolve) =>
  setTimeout(() => resolve(" Slow"), 2000)
);
const fast = new Promise((resolve) =>
  setTimeout(() => resolve(" Fast"), 1000)
);

Promise.race([slow, fast]).then((value) => console.log("Winner:", value));

//Conclusion
// Promises represent async values that may complete in the future.
// They have three states: pending, fulfilled, rejected.
// Use .then() for success, .catch() for errors, and .finally() for cleanup.
// You can chain promises for sequential operations.
// Promise.all() → Runs tasks in parallel.
// Promise.race() → Resolves with the first completed task.
