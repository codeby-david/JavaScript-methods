//DOM METHODS

//1.getElementById(id)-Selects an element by its ID

let tittle = document.getElementById('title')
console.log(tittle.textContent)//prints Hello World
tittle.style.color = "blue"//changes text to blue


//2.querySelector(selector)-Selects the first element matching CSS selector

let paragraph = document.querySelector(".message");
paragraph.textContent = "This text has been changed!";
paragraph.style.color = "red"


//3.addEventListener()-Attaches an event (like a click) to an element.

let button = document.getElementById('myBtn');
button.addEventListener("click",
  function () {
    alert("Button clicked")
  }
)

//4.removeChild()-Removes a child element from a parent.
let list = document.getElementById("list");
let firstItem = list.firstElementChild;
list.removeChild(firstItem); // removes "Item 1"
