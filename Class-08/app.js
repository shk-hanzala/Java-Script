// Question 01
let age = 21;
if (age >= 18) {
  console.log("You are eligible to vote.");
}

// Question 02
let marks = 75;
if (marks >= 50) {
  console.log("pass");
}
else {
  console.log("fail");
}

// Question 03
let temperature = 35;

if (temperature > 30) {
  console.log("Hot Weather");
}
else {
  console.log("cool weather");
}

// Question 04
let score = 85;
if (score >= 90) {
  console.log("Excellent");
} else if (score >= 80) {
  console.log("Very Good");
} else if (score >= 70) {
  console.log("Good");
} else {
  console.log("Need Improvement");
}

// Question 05
let isStudent = true;

if (isStudent) {
  console.log("You are a student.");
} else {
  console.log("You are not a student.");
}

// Question 06
let hasCNIC = true;
let hasLicense = false;

if (hasCNIC && hasLicense) {
  console.log("You are eligible to drive.");
} else {
  console.log("You are not eligible to drive.");
}

// Question 07
let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("Enjoy your day off!");
} else {
  console.log("Go to work.");
}

// Question 08
let userage = Number(prompt("Enter your age"));

if (userage >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// Question 09
let name = prompt("Enter your name");
let myage = Number(prompt("Enter your age"));
let city = prompt("Enter your city");

if (myage >= 18) {
  console.log("Welcome " + name + "!");
  console.log("You are eligible.");
  console.log("City: " + city);
} else {
  console.log("Sorry " + name + "!");
  console.log("You are not eligible.");
}