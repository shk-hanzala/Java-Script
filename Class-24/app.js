function buyNow() {

    document.getElementById("description").innerText =
        "Thank you for buying this product!";
}


function changeProduct() {

    document.getElementById("productImage").src =
        "images/black.webp";

    document.getElementById("productName").innerHTML =
        "Wireless Headphones";

    document.getElementById("description").innerHTML =
        "High quality wireless headphones.";

    document.getElementById("price").innerHTML =
        "Rs. 5,000";
}


function welcomeUser() {

    let name = document.getElementById("userName").value;

    document.getElementById("welcomeMessage").innerHTML =
        "Welcome, " + name + "!";
}


function changeImage() {

    document.getElementById("productImage").src =
        "images/black.webp";
}


function originalImage() {

    document.getElementById("productImage").src = "images/White.webp";
}