
document.getElementById("checkBtn").addEventListener("click", function () {

    let marks = Number(document.getElementById("marks").value);
    let result = document.getElementById("result");

    if (marks >= 80) {
        result.innerHTML = "Excellent";
    } 
    else if (marks >= 60) {
        result.innerHTML = "Good";
    } 
    else if (marks >= 40) {
        result.innerHTML = "Pass";
    } 
    else {
        result.innerHTML = "Fail";
    }

});
