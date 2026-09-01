// 1) Simple Function
function myFunction() {
    console.log("Hello world!");
}

myFunction();


// 2) Function with Parameters and Arguments
function concatTwoWords(yourName, fatherName) {
    console.log(yourName + " " + fatherName);
}

concatTwoWords("Ali", "Ahmed");


// 3) Function + Array + Loop
// Create a function that prints all names from an array
function printNames(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}

let names = ["Ali", "Ahmed", "Usman", "Hamza"];

printNames(names);


// 4) Function + Array + Loop + Condition
// Create a function that checks which numbers are even
function checkEvenNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            console.log(numbers[i] + " is Even");
        } else {
            console.log(numbers[i] + " is Odd");
        }
    }
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

checkEvenNumbers(numbers);
