// Change Profile Information

function changeProfile() {

    document.getElementById("profileName").innerHTML =
        "Ali Ahmed";

    document.getElementById("profileRole").innerHTML =
        "Web Developer";

    document.getElementById("profileTitle").innerHTML =
        "New Profile";

    document.getElementById("profileDescription").innerHTML =
        "I am a web developer who enjoys creating interactive websites.";
}


// Change Profile Image

function changeImage() {

    document.getElementById("profileImage").src =
        "Image/image2.jpg";
}


// Mouse Over

function imageOver() {

    document.getElementById("profileImage").style.transform =
        "scale(1.1)";

    document.getElementById("mouseMessage").innerHTML =
        "You are hovering over my profile image 😎";
}


// Mouse Out

function imageOut() {

    document.getElementById("profileImage").style.transform =
        "scale(1)";

    document.getElementById("mouseMessage").innerHTML =
        "Move your mouse over the image 👆";
}


// User Input

function showName() {

    var name = document.getElementById("userName").value;

    if (name == "") {

        alert("Please enter your name");

    } else {

        document.getElementById("profileName").innerHTML =
            name;
    }
}