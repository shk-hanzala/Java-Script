let laptop = [];
console.log(laptop);

laptop[0] = "HP";
laptop[1] = "DELL";
laptop[2] = "ASUS";
console.log(laptop);

laptop.push("Lenovo", "Apple");
console.log(laptop);

laptop.pop()
console.log(laptop);

laptop.shift();
console.log(laptop);

laptop.unshift("Apple")
console.log(laptop);

let cars = ["Lamborghini", "BMW", "Honda", "Cultus", "Corolla"];
console.log(cars);

let updatedCars = cars.slice(1, 5);  // isme 2nd value -1 hoti he is liye index se 1num + rakhte he
console.log(updatedCars);

let laptops = ["HP", "ASUS", "Dell",];
console.log(laptops);

laptops.splice(1, 1, "Lenovo");
console.log(laptops);

laptops.splice(1, 0, "Thinkpad", "Asus");
console.log(laptops);