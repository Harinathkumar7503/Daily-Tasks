


console.log("=======Shopping Cart================");

let a = 17000;
let b = 10000;
let total = (a + b);
console.log("Total =", total);
document.getElementById('total').innerText = "Total cost : " + total;
let dis = (total * 40) / 100;
console.log("Discount =", dis);
document.getElementById('discount').innerText = "Dicount :" + dis;
let final = (total - dis);
console.log("Final cost =", final);
document.getElementById('final').innerText = "Total :" + final;

console.log("=======Age and country check================");

let age = 22;
let country = "India";
let satus;
if ((age >= 18) && (country == "india" || country == "USA")) {
    console.log("ALLOWED");
    satus = "Allowed";
}
else {
    console.log("NOT ALLOWED");
    satus = " NOT Allowed";
}
document.getElementById('permit').innerHTML = "Status : " + satus;


