
let userName = "";
let userAge = 0;


const btnName = document.getElementById("btnName");
const greeting = document.getElementById("greeting");

btnName.addEventListener("click", function() {
  userName = prompt("Enter your name:");
  userAge = prompt("Enter your age:");

  
  if (userAge >= 18) {
    greeting.textContent = `Hello, ${userName}! You are an adult.`;
  } else {
    greeting.textContent = `Hello, ${userName}! You are still young.`;
  }
});


function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
}


function formatName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}


console.log("Total with tax:", calculateTotal(100, 0.16)); // 116
console.log("Formatted name:", formatName("jaVaScRipt")); // Javascript



const loopList = document.getElementById("loopList");


for (let i = 1; i <= 5; i++) {
  const li = document.createElement("li");
  li.textContent = `For loop count: ${i}`;
  loopList.appendChild(li);
}

// 
let count = 5;
while (count > 0) {
  const li = document.createElement("li");
  li.textContent = `While loop countdown: ${count}`;
  loopList.appendChild(li);
  count--;
}


const toggleBtn = document.getElementById("toggleBtn");
const toggleText = document.getElementById("toggleText");
const addItemBtn = document.getElementById("addItemBtn");
const dynamicList = document.getElementById("dynamicList");

toggleBtn.addEventListener("click", function() {
  if (toggleText.style.display === "none") {
    toggleText.style.display = "block";
  } else {
    toggleText.style.display = "none";
  }
});

let itemCount = 0;
addItemBtn.addEventListener("click", function() {
  itemCount++;
  const li = document.createElement("li");
  li.textContent = `Dynamic item ${itemCount}`;
  dynamicList.appendChild(li);
});

toggleText.addEventListener("mouseover", function() {
  toggleText.textContent = "You hovered over me!";
});
toggleText.addEventListener("mouseout", function() {
  toggleText.textContent = "This text can be toggled.";
});
