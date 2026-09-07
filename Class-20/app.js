// 1) userName
function userName(name) {
    console.log("Hello " + name);
}

userName("Hasan");


// 2) addWords
function addWords(word1, word2) {
    console.log(word1 + " " + word2);
}

addWords("Hello", "World");


// 3) multiply
function multiply(num1, num2) {
    return num1 * num2;
}

let result = multiply(5, 4);
console.log(result);


// 4) calculateSquare
function calculateSquare(number) {
    return number * number;
}

console.log(calculateSquare(6));


// 5) checkAge
function checkAge(age) {
    if (age >= 18) {
        return "You are eligible";
    } else {
        return "You are not eligible";
    }
}

console.log(checkAge(21));


// 6) printNumbers
function printNumbers(limit) {
    for (let i = 1; i <= limit; i++) {
        console.log(i);
    }
}

printNumbers(5);


// 7) showStudents
let students = ["Hassan", "Ali", "Ahmed", "Sara"];

function showStudents() {
    for (let i = 0; i < students.length; i++) {
        console.log(students[i]);
    }
}

showStudents();


// 8) Local Variable
function test() {
    let message = "Hello";

    console.log(message);
}

test();

// message is a local variable.
// We cannot use message outside the test() function.
// console.log(message);  // ReferenceError