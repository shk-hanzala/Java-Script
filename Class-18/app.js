// Question 1
// Store the current date and time
let today = new Date();
console.log(today);


// Question 2
// Store the current date
let activeYear = new Date();
console.log(activeYear.getFullYear());


// Question 3
let activeMonth = new Date();

// Print only the current month
// JavaScript months start from 0, so +1 gives the normal month number
console.log(activeMonth.getMonth() + 1);


// Question 4
// Store the current date and time
let currentTime = new Date();

// Print hours, minutes, and seconds separately
console.log("Hours:", currentTime.getHours());
console.log("Minutes:", currentTime.getMinutes());
console.log("Seconds:", currentTime.getSeconds());


// Question 5
// Create a Date object
let yearDate = new Date();

// Print the current year
console.log(yearDate.getFullYear());

// Change the year to 2030
yearDate.setFullYear(2030);

// Print only the updated year
console.log(yearDate.getFullYear());


// Question 6
// Create a Date object
let date = new Date();

// Change the date
date.setFullYear(2027);
date.setMonth(11); // December (January = 0, December = 11)
date.setDate(28);

// Print the updated Date object
console.log(date);
