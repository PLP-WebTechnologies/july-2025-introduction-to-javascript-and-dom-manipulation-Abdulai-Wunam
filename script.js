

// JavaScript Basics

const checkAgeBtn = document.getElementById("checkAgeBtn");
const ageResult = document.getElementById("ageResult");

checkAgeBtn.addEventListener("click", () => {
  let age = document.getElementById("ageInput").value;

  if (age >= 18) {
    ageResult.textContent = "You are eligible to vote!";
  } else if (age > 0) {
    ageResult.textContent = "You are too young to vote.";
  } else {
    ageResult.textContent = "Please enter a valid age.";
  }
});




// Function to calculate total of a shopping cart
function calculateTotal(prices) {
  let sum = 0;
  prices.forEach(price => (sum += price));
  return sum;
}

// Another reusable function: format a string
function formatCurrency(amount) {
  return "$" + amount.toFixed(2);
}

const calcTotalBtn = document.getElementById("calcTotalBtn");
const totalResult = document.getElementById("totalResult");

calcTotalBtn.addEventListener("click", () => {
  const cart = [9.99, 19.99, 4.5]; // sample cart
  const total = calculateTotal(cart);
  totalResult.textContent = "🛒 Cart Total: " + formatCurrency(total);
});




const showNumbersBtn = document.getElementById("showNumbersBtn");
const numberList = document.getElementById("numberList");

showNumbersBtn.addEventListener("click", () => {
  numberList.innerHTML = ""; // clear list first

  // Example: for loop 1–10
  for (let i = 1; i <= 10; i++) {
    let li = document.createElement("li");
    li.textContent = "Number " + i;
    numberList.appendChild(li);
  }
});


// DOM Manipulation

const changeTextBtn = document.getElementById("changeTextBtn");
const toggleColorBtn = document.getElementById("toggleColorBtn");
const addItemBtn = document.getElementById("addItemBtn");
const dynamicList = document.getElementById("dynamicList");

//  Changing header text
changeTextBtn.addEventListener("click", () => {
  document.querySelector("h1").textContent = " Header Changed Dynamically!";
});

//  Toggling background color class
toggleColorBtn.addEventListener("click", () => {
  document.body.classList.toggle("highlight");
});

// Adding new list item dynamically
addItemBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "New Dynamic Item";
  dynamicList.appendChild(li);
});
