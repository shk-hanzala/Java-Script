// Question 1
let number = 12.6;

console.log(Math.round(number));
// Output: 13


// Question 2
let number2 = 8.9;

console.log(Math.floor(number2));
// Output: 8


// Question 3
let number3 = 5.2;

console.log(Math.ceil(number3));
// Output: 6


// Question 4
let number4 = 7.6;

console.log(Math.round(number4));
// Output: 8

console.log(Math.floor(number4));
// Output: 7

console.log(Math.ceil(number4));
// Output: 8


// Question 5
let randomNumber = Math.random();

console.log(randomNumber);
// Output: 0 se 1 ke darmiyan koi random number


// Question 6
let randomNumber2 = Math.floor(Math.random() * 10) + 1;

console.log(randomNumber2);
// Possible output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10


// Question 7
let dice = Math.floor(Math.random() * 6) + 1;

console.log(dice);
// Possible output: 1, 2, 3, 4, 5, 6


// Question 8
let randomNumber3 = Math.floor(Math.random() * 100) + 1;

console.log(randomNumber3);

if (randomNumber3 > 50) {
    console.log("Number is greater than 50");
} else {
    console.log("Number is 50 or less");
}