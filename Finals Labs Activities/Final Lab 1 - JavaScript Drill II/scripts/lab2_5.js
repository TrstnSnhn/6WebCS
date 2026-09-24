// ==========================================
// Lab 2.5: Loops
// Objective: Practice for and while loops.
// Student: Angelo Tristan D. Sinohin
// Course & Section: BSCS CS202
// ==========================================

// 1. Use a for loop to display numbers 1–10 in the console
console.log("--- Numbers 1 to 10 using For Loop ---");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Ask the user for a number and compute its factorial using a while loop
let n = Number(prompt("Enter a number to compute factorial:"));
let fact = 1;
let i = 1;
while (i <= n) {
  fact *= i;
  i++;
}
console.log(`Factorial of ${n} = ${fact}`);
