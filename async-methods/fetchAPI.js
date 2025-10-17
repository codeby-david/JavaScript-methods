// FETCH API IN JAVASCRIPT

// The Fetch API provides a modern way to make HTTP requests in JavaScript.
// It returns a Promise and is used for fetching resources like data from APIs.
// Fetch makes asynchronous requests simpler compared to the old XMLHttpRequest.
// It supports all HTTP methods (GET, POST, PUT, DELETE, etc.)


// BASIC SYNTAX

// fetch(url, options)
//   .then(response => { ... })
//   .catch(error => { ... });
//
// - url → The endpoint you're requesting.
// - options → (optional) configuration object (method, headers, body, etc.)


// EXAMPLE 1: SIMPLE GET REQUEST


fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json()) // convert response to JSON
  .then(data => console.log("All Posts:", data))
  .catch(error => console.error(" Error:", error));


// WHAT HAPPENS HERE?

// 1. fetch() sends a request to the given URL.
// 2. The first .then() converts the response into a JavaScript object using response.json().
// 3. The second .then() gives access to the parsed data.
// 4. .catch() handles any network or parsing errors.


// EXAMPLE 2: MAKING A POST REQUEST (SENDING DATA)


fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'New Post',
    body: 'This is the body of the post',
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => console.log("Created Post:", data))
  .catch(error => console.error("Error:", error));


// WHY USE JSON.STRINGIFY()?

// The body of a POST request must be in string format when sending JSON data.
// JSON.stringify() converts a JS object into a JSON string.


// EXAMPLE 3: USING ASYNC / AWAIT

// A cleaner and more readable way to handle fetch requests.

async function getUsers() {
  try {
    console.log("Fetching users...");
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const users = await response.json();
    console.log("Users fetched successfully:", users);
  } catch (error) {
    console.error(" Fetch failed:", error);
  } finally {
    console.log("Fetch attempt finished!");
  }
}

getUsers();


// WHY USE ASYNC / AWAIT?

// - Makes code look synchronous and cleaner.
// - Easier to handle multiple async operations in sequence.
// - Works with try...catch for better error handling.


// EXAMPLE 4: PUT REQUEST (UPDATE DATA)


async function updatePost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'Updated Title',
        body: 'This content has been updated',
        userId: 1
      })
    });

    const updatedPost = await response.json();
    console.log("Post Updated:", updatedPost);
  } catch (error) {
    console.error(" Error updating post:", error);
  }
}

updatePost();


// EXAMPLE 5: DELETE REQUEST


async function deletePost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE'
    });

    if (response.ok) {
      console.log("Post deleted successfully!");
    } else {
      console.error(" Failed to delete post!");
    }
  } catch (error) {
    console.error(" Error:", error);
  }
}

deletePost();


// EXAMPLE 6: FETCH WITH CUSTOM HEADERS (E.G. AUTH TOKEN)


fetch('https://api.example.com/data', {
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    'Accept': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => console.log(" Authorized Data:", data))
  .catch(error => console.error("Authorization Error:", error));


// EXAMPLE 7: HANDLING MULTIPLE FETCH REQUESTS

// Using Promise.all() to run requests in parallel.

const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
const usersPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([postsPromise, usersPromise])
  .then(([posts, users]) => {
    console.log(" Posts:", posts.length);
    console.log("Users:", users.length);
  })
  .catch(error => console.error(" Error fetching data:", error));


// EXAMPLE 8: DISPLAYING DATA IN HTML (BASIC DEMO)
// You can use Fetch to populate HTML content dynamically.

async function displayPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  // Create a simple list in the console (or DOM)
  console.log(" Displaying first 5 posts:");
  posts.slice(0, 5).forEach(post => {
    console.log(` ${post.title}`);
  });
}

displayPosts();


