
// Part 1: JavaScript Basics

// Variable declarations
let userName = "";
let userAge = 0;

// Selecting DOM element for interaction
const btnName = document.getElementById("btnName");
const greeting = document.getElementById("greeting");

// Button click event to capture user input
btnName.addEventListener("click", function() {
  userName = prompt("Enter your name:");
  userAge = prompt("Enter your age:");

  // Using conditionals
  if (userAge >= 18) {
    greeting.textContent = `Hello, ${userName}! You are an adult.`;
  } else {
    greeting.textContent = `Hello, ${userName}! You are still young.`;
  }
});

// Part 2: JavaScript Functions

// Function 1: Calculate total price with tax
function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
}

// Function 2: Format a string (capitalize first letter)
function formatName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

// Run and log results in console
console.log("Total with tax:", calculateTotal(100, 0.16)); // 116
console.log("Formatted name:", formatName("jaVaScRipt")); // Javascript


// Part 3: JavaScript Loops

const loopList = document.getElementById("loopList");

// Example 1: For loop - count 1 to 5
for (let i = 1; i <= 5; i++) {
  const li = document.createElement("li");
  li.textContent = `For loop count: ${i}`;
  loopList.appendChild(li);
}

// Example 2: While loop - countdown from 5
let count = 5;
while (count > 0) {
  const li = document.createElement("li");
  li.textContent = `While loop countdown: ${count}`;
  loopList.appendChild(li);
  count--;
}

// Part 4: DOM Manipulation

const toggleBtn = document.getElementById("toggleBtn");
const toggleText = document.getElementById("toggleText");
const addItemBtn = document.getElementById("addItemBtn");
const dynamicList = document.getElementById("dynamicList");

// Example 1: Toggle text visibility
toggleBtn.addEventListener("click", function() {
  if (toggleText.style.display === "none") {
    toggleText.style.display = "block";
  } else {
    toggleText.style.display = "none";
  }
});

// Example 2: Add items dynamically
let itemCount = 0;
addItemBtn.addEventListener("click", function() {
  itemCount++;
  const li = document.createElement("li");
  li.textContent = `Dynamic item ${itemCount}`;
  dynamicList.appendChild(li);
});

// Example 3: Change text on mouseover
toggleText.addEventListener("mouseover", function() {
  toggleText.textContent = "You hovered over me!";
});
toggleText.addEventListener("mouseout", function() {
  toggleText.textContent = "This text can be toggled.";
});
