//DOM METHODS

//1.getElementById(id)-Selects an element by its ID

let title = document.getElementById('title');
console.log(title.textContent);//prints Hello World
title.style.color = "blue";//changes text to blue


//2.querySelector(selector)-Selects the first element matching CSS selector

let paragraph = document.querySelector(".message");
paragraph.textContent = "This text has been changed!";
paragraph.style.color = "red";

//3.querySelectorAll(selector)-Seletcts all elements matching selector and returns an array
let allParagraphs = document.querySelectorAll("p");
allParagraphs.forEach(function(paragraph) {
  paragraph.style.fontSize = "18px";
});

//4.addEventListener()-Attaches an event (like a click) to an element.

let button = document.getElementById('myBtn');
button.addEventListener("click",
  function () {
    alert("Button clicked")
  }
);

//5.removeChild()-Removes a child element from a parent.
let list = document.getElementById("list");
let firstItem = list.firstElementChild;
list.removeChild(firstItem); // removes "Item 1"

//6.appendChild()-Adds a new child element to a parent.
let newItem = document.createElement("li");
newItem.textContent = "Item 3";
list.appendChild(newItem);

//7.replaceChild()-Replaces an existing child element with a new one.
let secondItem = list.children[1];
let newItem2 = document.createElement("li");
newItem2.textContent = "Item 5";
list.replaceChild(newItem2, secondItem);

