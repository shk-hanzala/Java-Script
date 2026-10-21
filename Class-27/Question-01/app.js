
let price = 250;

document.getElementById("calculateBtn").addEventListener("click", function () {

    let quantityInput = document.getElementById("quantity").value;
    let result = document.getElementById("result");

    if (quantityInput === "" || Number(quantityInput) <= 0) {
        result.innerHTML = "Please enter a valid quantity!";
    }
    else {
        let quantity = Number(quantityInput);
        let total = price * quantity;
        let discount = 0;

        if (total >= 1000) {
            discount = total * 0.10;
        }
        else if (total >= 500) {
            discount = total * 0.05;
        }
        else {
            discount = 0;
        }

        let finalBill = total - discount;

        console.log("Original Bill: Rs. " + total);
        console.log("Discount: Rs. " + discount);
        console.log("Final Bill: Rs. " + finalBill);

        result.innerHTML =
            "Original Bill: Rs. " + total +
            "<br>Discount: Rs. " + discount +
            "<br>Final Bill: Rs. " + finalBill;
    }

});
