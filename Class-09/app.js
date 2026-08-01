// Question 01
let age = 21;
let hasCNIC = true;

if (age >= 18 || age === 20) {
    console.log("Yeah, Are you adult");
    
    if (hasCNIC === true) {
        console.log("Do you have CNIC? Yes you are eligible to vote.");
    }
    
}

// Question 02
let username = "Hassan";
let password = "123456";

if (username === "Hassan") {        
    console.log("Username: Hassan");

    if (password === "123456") {
        console.log("Password: 123456");
    }   
}

// Question 03
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn === true) {
    if (isAdmin === true) {
        console.log("Admin Panel Open");
    }
}

// Question 04

let marks = 90;
let interview = true;

if (marks >= 80) {
    console.log("Congratulations!");

    if (interview === true) {
        console.log("Admission Confirmed.");
    }
}