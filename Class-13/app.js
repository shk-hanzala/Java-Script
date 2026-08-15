//Question 01
let students = ["Ali", "Hassan", "Usman", "Bilal"];

let found = "Usman is not Found";

for (let i = 0; i < students.length; i++) {
    if (students[i] === "Usman") {
        found = "Usman is found";
        break;
    }
}
console.log(found);

//Question 02
let numbers = [10, 20, 30, 40, 50, 60];

let flag = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 40) {
        flag = true;
        break;
    }
}
console.log(flag);

//Question 03
let number = [10, -5, 20, -8, 30, -2, 40];

for (let i = 0; i < number.length; i++) {
    if (number[i] > 0) {
        console.log("Positive: " + number[i]);
    } else {
        console.log("Negative: " + number[i]);
    }
}

//Question 04
let marks = [85, 45, 72, 30, 90, 55];

for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 50) {
        console.log(marks[i] + " - Pass");
    } else {
        console.log(marks[i] + " - Fail");
    }
}

//Question 05
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//Question 06
for (let i = 3; i <= 5; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i + " " + j);
    }

    console.log("");
}

//Question 07
let student = ["Naeem", "Hassan", "Ahmed"];

let subject = ["HTML", "CSS", "JavaScript"];

for (let i = 0; i < student.length; i++) {
    for (let j = 0; j < subject.length; j++) {
        console.log(student[i] + " - " + subject[j]);
    }
    console.log("");
}