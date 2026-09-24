// ==========================================
// Lab 2.4: Conditional Statements
// Objective: Use comparison and logical operators in conditionals.
// Student: Angelo Tristan D. Sinohin
// Course & Section: BSCS CS202
// ==========================================

// 1. Ask the user for their age
let ageInput = prompt("Enter your age:");

// Convert input to a number
let ageNum = Number(ageInput);

// 2 & 3. Validate input and display classification
if (!isNaN(ageNum) && ageNum >= 18) {
  alert("You are an adult.");
} else if (!isNaN(ageNum)) {
  alert("You are a minor.");
} else {
  alert("Invalid input!");
}
