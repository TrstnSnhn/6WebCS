/**
 * JavaScript Drill: Part II - Interactive Application Logic
 * Student: Angelo Tristan D. Sinohin | BSCS CS202
 */

(function () {
  "use strict";

  // Elements
  const terminalLogs = document.getElementById("terminalLogs");
  const logCountEl = document.getElementById("logCount");
  const toastEl = document.getElementById("toast");

  let totalLogs = 0;

  // Intercept and mirror console.log to our on-page terminal
  const originalConsoleLog = console.log;

  function appendTerminal(tag, content, isAlert = false, isHighlight = false) {
    totalLogs++;
    if (logCountEl) {
      logCountEl.textContent = `${totalLogs} logged`;
    }

    const entry = document.createElement("div");
    entry.className = "log-entry";

    const timestamp = new Date().toLocaleTimeString();

    let formattedContent = "";
    if (typeof content === "object" && content !== null) {
      try {
        formattedContent = JSON.stringify(content, null, 2);
      } catch (e) {
        formattedContent = String(content);
      }
    } else {
      formattedContent = String(content);
    }

    entry.innerHTML = `
      <div class="log-header">
        <span class="log-tag">${tag}</span>
        <span>${timestamp}</span>
      </div>
      <div class="log-content ${isAlert ? "log-alert" : ""} ${isHighlight ? "log-highlight" : ""}">${escapeHtml(formattedContent)}</div>
    `;

    if (terminalLogs) {
      terminalLogs.appendChild(entry);
      terminalLogs.scrollTop = terminalLogs.scrollHeight;
    }
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add("show");
    setTimeout(() => {
      toastEl.classList.remove("show");
    }, 2500);
  }

  // Hook console.log to show in both devtools and terminal
  console.log = function (...args) {
    originalConsoleLog.apply(console, args);
    const text = args
      .map((arg) => (typeof arg === "object" ? JSON.stringify(arg) : String(arg)))
      .join(" ");
    appendTerminal("CONSOLE.LOG", text);
  };

  // Helper alert that both shows native or simulated alert
  function customAlert(message, title = "JavaScript Alert") {
    appendTerminal("ALERT", message, true);
    window.alert(message);
  }

  // =========================================================================
  // LAB 2.1: VARIABLES AND DATA TYPES
  // =========================================================================
  window.runLab2_1 = function () {
    appendTerminal("SYSTEM", "Executing Lab 2.1: Variables and Data Types...", false, true);

    let name = "Juan";
    let age = 20;
    let isStudent = true;
    let grades = [85, 90, 92];
    let student = { firstName: "Juan", lastName: "Dela Cruz" };

    console.log(name, typeof name);
    console.log(age, typeof age);
    console.log(isStudent, typeof isStudent);
    console.log(grades, typeof grades);
    console.log(student, typeof student);

    showToast("Lab 2.1 executed successfully! Check Terminal & F12 Console.");
  };

  // =========================================================================
  // LAB 2.3: ARITHMETIC & TYPE CONVERSION
  // =========================================================================
  window.runLab2_3 = function () {
    appendTerminal("SYSTEM", "Executing Lab 2.3: Arithmetic & Type Conversion (Native Dialogs)...", false, true);

    let input1 = prompt("Enter first number:");
    if (input1 === null) {
      appendTerminal("SYSTEM", "Prompt cancelled by user.");
      return;
    }
    let num1 = Number(input1);

    let input2 = prompt("Enter second number:");
    if (input2 === null) {
      appendTerminal("SYSTEM", "Prompt cancelled by user.");
      return;
    }
    let num2 = Number(input2);

    let sum = num1 + num2;
    let diff = num1 - num2;
    let prod = num1 * num2;
    let div = num1 / num2;

    let alertMsg = `Results: \nSum = ${sum} \nDifference = ${diff} \nProduct = ${prod} \nDivision = ${div}`;
    customAlert(alertMsg);

    let numString = "123";
    let numValue = Number(numString);
    let boolValue = Boolean(0);

    console.log("String:", numString, "Type:", typeof numString);
    console.log("Converted Number:", numValue, "Type:", typeof numValue);
    console.log("Boolean Value of 0:", boolValue);

    showToast("Lab 2.3 completed! Check Terminal & F12 Console.");
  };

  // Sandbox execution for Lab 2.3 without blocking prompt()
  window.runLab2_3_Sandbox = function () {
    const input1 = document.getElementById("lab2_3_n1").value;
    const input2 = document.getElementById("lab2_3_n2").value;

    if (input1.trim() === "" || input2.trim() === "") {
      alert("Please enter both numbers in the sandbox inputs.");
      return;
    }

    appendTerminal("SANDBOX", `Lab 2.3 Sandbox Run with num1=${input1}, num2=${input2}`, false, true);

    let num1 = Number(input1);
    let num2 = Number(input2);

    let sum = num1 + num2;
    let diff = num1 - num2;
    let prod = num1 * num2;
    let div = num1 / num2;

    let alertMsg = `Results: \nSum = ${sum} \nDifference = ${diff} \nProduct = ${prod} \nDivision = ${div}`;
    appendTerminal("ALERT (SANDBOX)", alertMsg, true);

    let numString = "123";
    let numValue = Number(numString);
    let boolValue = Boolean(0);

    console.log("String:", numString, "Type:", typeof numString);
    console.log("Converted Number:", numValue, "Type:", typeof numValue);
    console.log("Boolean Value of 0:", boolValue);

    showToast("Lab 2.3 Sandbox executed!");
  };

  // =========================================================================
  // LAB 2.4: CONDITIONAL STATEMENTS
  // =========================================================================
  window.runLab2_4 = function () {
    appendTerminal("SYSTEM", "Executing Lab 2.4: Conditional Statements (Native Prompt)...", false, true);

    let ageInput = prompt("Enter your age:");
    if (ageInput === null) {
      appendTerminal("SYSTEM", "Prompt cancelled by user.");
      return;
    }

    let ageNum = Number(ageInput);

    if (!isNaN(ageNum) && ageNum >= 18) {
      customAlert("You are an adult.");
    } else if (!isNaN(ageNum)) {
      customAlert("You are a minor.");
    } else {
      customAlert("Invalid input!");
    }

    showToast("Lab 2.4 executed! Check Terminal & F12 Console.");
  };

  // Sandbox execution for Lab 2.4
  window.runLab2_4_Sandbox = function () {
    const ageInput = document.getElementById("lab2_4_age").value;
    if (ageInput.trim() === "") {
      alert("Please enter an age in the sandbox input.");
      return;
    }

    appendTerminal("SANDBOX", `Lab 2.4 Sandbox Evaluation with input="${ageInput}"`, false, true);

    let ageNum = Number(ageInput);

    if (!isNaN(ageNum) && ageNum >= 18) {
      appendTerminal("ALERT (SANDBOX)", "You are an adult.", true);
    } else if (!isNaN(ageNum)) {
      appendTerminal("ALERT (SANDBOX)", "You are a minor.", true);
    } else {
      appendTerminal("ALERT (SANDBOX)", "Invalid input!", true);
    }

    showToast("Lab 2.4 Sandbox evaluated!");
  };

  // =========================================================================
  // LAB 2.5: LOOPS
  // =========================================================================
  window.runLab2_5 = function () {
    appendTerminal("SYSTEM", "Executing Lab 2.5: Loops (Native Prompt)...", false, true);

    // 1. For loop
    appendTerminal("SYSTEM", "For loop (1 to 10):");
    for (let i = 1; i <= 10; i++) {
      console.log(i);
    }

    // 2. Factorial using while loop
    let inputN = prompt("Enter a number to compute factorial:");
    if (inputN === null) {
      appendTerminal("SYSTEM", "Prompt cancelled by user.");
      return;
    }

    let n = Number(inputN);
    let fact = 1;
    let i = 1;
    while (i <= n) {
      fact *= i;
      i++;
    }
    console.log(`Factorial of ${n} = ${fact}`);

    showToast("Lab 2.5 executed! Check Terminal & F12 Console.");
  };

  // Sandbox execution for Lab 2.5
  window.runLab2_5_Sandbox = function () {
    const inputVal = document.getElementById("lab2_5_n").value;
    if (inputVal.trim() === "") {
      alert("Please enter a number in the sandbox input.");
      return;
    }

    appendTerminal("SANDBOX", `Lab 2.5 Sandbox Factorial for N=${inputVal}`, false, true);

    // 1. For loop 1-10
    appendTerminal("SYSTEM", "For loop (1 to 10):");
    for (let i = 1; i <= 10; i++) {
      console.log(i);
    }

    // 2. While loop factorial
    let n = Number(inputVal);
    let fact = 1;
    let i = 1;
    while (i <= n) {
      fact *= i;
      i++;
    }
    console.log(`Factorial of ${n} = ${fact}`);

    showToast("Lab 2.5 Sandbox executed!");
  };

  // =========================================================================
  // LAB 2.6: ARRAYS AND OBJECTS
  // =========================================================================
  window.runLab2_6 = function () {
    appendTerminal("SYSTEM", "Executing Lab 2.6: Arrays and Objects...", false, true);

    let fruits = ["apple", "banana", "mango"];
    fruits.push("orange");
    fruits.shift();
    console.log(fruits);

    let student = {
      name: "Maria",
      age: 21,
      course: "IT"
    };
    console.log(student);

    showToast("Lab 2.6 executed successfully! Check Terminal & F12 Console.");
  };

  // Run all labs in sequence
  window.runAllLabs = function () {
    appendTerminal("SYSTEM", "--- RUNNING COMPLETE JAVASCRIPT DRILL: PART II ---", false, true);
    window.runLab2_1();
    
    // For lab 2.3 sandbox fallback
    let num1 = 12;
    let num2 = 4;
    appendTerminal("BATCH RUN", `Lab 2.3 with default test values (num1=${num1}, num2=${num2}):`);
    let sum = num1 + num2;
    let diff = num1 - num2;
    let prod = num1 * num2;
    let div = num1 / num2;
    appendTerminal("ALERT (SIMULATED)", `Results: \nSum = ${sum} \nDifference = ${diff} \nProduct = ${prod} \nDivision = ${div}`, true);
    let numString = "123";
    let numValue = Number(numString);
    let boolValue = Boolean(0);
    console.log("String:", numString, "Type:", typeof numString);
    console.log("Converted Number:", numValue, "Type:", typeof numValue);
    console.log("Boolean Value of 0:", boolValue);

    // Lab 2.4 default test
    appendTerminal("BATCH RUN", `Lab 2.4 with default age=20:`);
    let ageNum = 20;
    if (!isNaN(ageNum) && ageNum >= 18) {
      appendTerminal("ALERT (SIMULATED)", "You are an adult.", true);
    }

    // Lab 2.5 default test
    appendTerminal("BATCH RUN", `Lab 2.5 with default factorial n=5:`);
    for (let i = 1; i <= 10; i++) {
      console.log(i);
    }
    let n = 5;
    let fact = 1;
    let i = 1;
    while (i <= n) {
      fact *= i;
      i++;
    }
    console.log(`Factorial of ${n} = ${fact}`);

    // Lab 2.6
    window.runLab2_6();

    appendTerminal("SYSTEM", "--- ALL LAB DRILLS COMPLETED ---", false, true);
    showToast("All 5 labs executed successfully in batch mode!");
  };

  // =========================================================================
  // TERMINAL ACTIONS
  // =========================================================================
  window.clearTerminal = function () {
    if (!terminalLogs) return;
    terminalLogs.innerHTML = `<div class="terminal-welcome">// Terminal cleared. Click any 'Run' button above to execute drills.</div>`;
    totalLogs = 0;
    if (logCountEl) {
      logCountEl.textContent = `0 logged`;
    }
    showToast("Terminal output cleared.");
  };

  window.copyTerminal = function () {
    if (!terminalLogs) return;
    const text = terminalLogs.innerText;
    navigator.clipboard.writeText(text).then(() => {
      showToast("Terminal logs copied to clipboard!");
    }).catch(() => {
      showToast("Unable to copy logs.");
    });
  };

  window.copyCode = function (codeId) {
    const codeEl = document.getElementById(codeId);
    if (!codeEl) return;
    const code = codeEl.textContent;
    navigator.clipboard.writeText(code).then(() => {
      showToast("Code snippet copied to clipboard!");
    }).catch(() => {
      showToast("Unable to copy code.");
    });
  };

})();
