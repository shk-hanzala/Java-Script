// Part 2: onfocus

function fieldFocus(fieldName) {
    console.log(fieldName + " field focused");
}


// Part 2: onblur

function fieldBlur(fieldName) {
    console.log(fieldName + " field lost focus");
}


// Part 3: onclick

function submitClicked() {
    console.log("Submit button clicked");
}


// Part 3: onmouseover

function mouseEnter() {
    console.log("Mouse entered Submit button");
}


// Part 3: onmouseout

function mouseLeave() {
    console.log("Mouse left Submit button");
}


// Last Part: Form Submit

function registerUser() {

    // Get user information

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let age = Number(document.getElementById("age").value);
    let gender = document.getElementById("gender").value;
    let city = document.getElementById("city").value;


    // Part 4: Check Age

    let ageGroup;

    if (age < 13) {
        ageGroup = "Child";
    }
    else if (age >= 13 && age <= 17) {
        ageGroup = "Teenager";
    }
    else if (age >= 18 && age <= 59) {
        ageGroup = "Adult";
    }
    else {
        ageGroup = "Senior";
    }


    // Part 5: Switch Case for City

    let cityMessage;

    switch (city) {

        case "Karachi":
            cityMessage = "User lives in Karachi";
            break;

        case "Lahore":
            cityMessage = "User lives in Lahore";
            break;

        case "Islamabad":
            cityMessage = "User lives in Islamabad";
            break;

        default:
            cityMessage = "User lives in another city";
    }


    // Show all information in Console

    console.log("----- USER INFORMATION -----");

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Age:", age);
    console.log("Age Group:", ageGroup);
    console.log("Gender:", gender);
    console.log("City:", city);
    console.log(cityMessage);

}