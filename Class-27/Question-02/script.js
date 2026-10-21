
document.getElementById("generateBtn").addEventListener("click", function () {

    let number = Math.floor(Math.random() * 100) + 1;

    let result = document.getElementById("result");

    if (number > 50) {
        result.innerHTML = "Number: " + number + " - High Number";
    } else {
        result.innerHTML = "Number: " + number + " - Low Number";
    }

});
