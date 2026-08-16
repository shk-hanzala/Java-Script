// Question 1
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}


// Question 2
let temperature = 35;

if (temperature >= 30) {
    console.log("It is hot");
} else {
    console.log("It is normal");
}


// Question 3
let firstName = "Muhammad";
let lastName = "Hanzala";

let fullName = firstName + " " + lastName;
console.log(fullName);


// Question 4
let price = 149.786;

console.log(price.toFixed(2));


// Question 5
let numbers = [10, 15, 22, 31, 44, 50];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}


// Question 6
let age = prompt("Enter your age:");
age = Number(age);

console.log(age);
console.log(typeof age);


// Question 7
let name = "hanzala";

console.log(name.toUpperCase());


// Question 8
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i + " x " + j);
    }
}


// Question 9
let nums = [5, 15, 8, 20, 12, 7];

let count = 0;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 10) {
        count++;
    }
}

console.log("Numbers greater than 10:", count);


// Question 10
let sentence = "I am learning JavaScript";

let position = sentence.indexOf("JavaScript");

console.log(position);


// Question 11
let number = 4.7;

console.log(Math.round(number));
console.log(Math.floor(number));
console.log(Math.ceil(number));


// Question 12
let randomNumber = Math.floor(Math.random() * 20) + 1;

console.log(randomNumber);


// Question 13
let stringNumber = "45.75";

let decimalNumber = parseFloat(stringNumber);

console.log(decimalNumber);
console.log(typeof decimalNumber);


// Question 14
let students = ["Ali", "Hassan", "Usman", "Bilal"];

let searchStudent = "Usman";
let found = false;

for (let i = 0; i < students.length; i++) {
    if (students[i] === searchStudent) {
        found = true;
        break;
    }
}

if (found) {
    console.log("Student Found");
} else {
    console.log("Student Not Found");
}


// Question 15
let score = 75;

if (score >= 80) {
    console.log("Excellent");
} else if (score >= 60) {
    console.log("Good");
} else if (score >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// Question 16
let text = "JavaScript";

console.log(text[2]);
console.log(text[text.length - 1]);


// Question 17
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

fruits.push("Watermelon");
fruits.unshift("Strawberry");

console.log(fruits);


// Question 18
let animals = ["Cat", "Dog", "Lion", "Tiger", "Horse"];

animals.pop();
animals.shift();

console.log(animals);


// Question 19
let colors = ["Red", "Blue", "Green", "Yellow", "Black", "White"];

colors.splice(2, 2, "Pink");

console.log(colors);


// Question 20
let myName = "Muhammad Hanzala";

myName = myName.replace("Hanzala", "Ali");

console.log(myName);


// Question 21
let isLoggedIn = true;

if (isLoggedIn) {
    console.log("Welcome");
} else {
    console.log("Please login");
}


// Question 22
let userAge = 20;
let hasPermission = true;

if (userAge >= 18) {
    if (hasPermission) {
        console.log("Access Allowed");
    } else {
        console.log("Permission Required");
    }
} else {
    console.log("You are too young");
}


// Question 23
let numbers2 = [10, 20, 30, 40, 50];

for (let i = numbers2.length - 1; i >= 0; i--) {
    console.log(numbers2[i]);
}


// Question 24
let sentence2 = "I LOVE JavaScript AND HTML";

sentence2 = sentence2.toLowerCase();
sentence2 = sentence2.replace("javascript", "css");

console.log(sentence2);


// Question 25
let userNumber = prompt("Enter a number:");

userNumber = parseInt(userNumber);

if (userNumber > 0) {
    console.log("Positive");
} else if (userNumber < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


// Question 26
let decimal = 25.75;

let decimalString = String(decimal);

console.log(decimalString);
console.log(typeof decimalString);


// Question 27
let names = ["Ali", "Usman", "Bilal", "Hassan", "Ahmed"];

let searchName = "Hassan";
let isFound = false;

for (let i = 0; i < names.length; i++) {
    if (names[i] === searchName) {
        isFound = true;
        break;
    }
}

if (isFound) {
    console.log("Found");
} else {
    console.log("Not Found");
}


// Question 28
for (let i = 1; i <= 3; i++) {

    let stars = "";

    for (let j = 1; j <= 3; j++) {
        stars += "*";
    }

    console.log(stars);
}


// Question 29
let random = Math.floor(Math.random() * 100) + 1;

console.log("Random number:", random);

if (random > 50) {
    console.log("Greater than 50");
} else {
    console.log("50 or below");
}


// Question 30
let userPrice = prompt("Enter price:");
let quantity = prompt("Enter quantity:");

userPrice = Number(userPrice);
quantity = Number(quantity);

let total = userPrice * quantity;

console.log("Total Price: " + total.toFixed(2));