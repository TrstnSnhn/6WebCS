// ==========================================
// Lab 2.3: Arithmetic & Type Conversion
// Objective: Perform arithmetic operations and demonstrate type conversion.
// Student: Angelo Tristan D. Sinohin
// Course & Section: BSCS CS202
// ==========================================

// 1. Ask the user for two numbers using prompt()
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

// 2. Perform addition, subtraction, multiplication, and division
let sum = num1 + num2;
let diff = num1 - num2;
let prod = num1 * num2;
let div = num1 / num2;

// 3. Display results in an alert
alert(`Results: 
Sum = ${sum} 
Difference = ${diff} 
Product = ${prod} 
Division = ${div}`);

// 4. Show conversion of a string to a number and a number to boolean
let numString = "123";
let numValue = Number(numString);
let boolValue = Boolean(0);

console.log("String:", numString, "Type:", typeof numString);
console.log("Converted Number:", numValue, "Type:", typeof numValue);
console.log("Boolean Value of 0:", boolValue);
