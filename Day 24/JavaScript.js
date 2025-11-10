// Even or Odd

let number = 7;

if (number % 2 == 0) {
    console.log(number + " Prime Number");
}
else {
    console.log(number + " Not A Prime Number");
}




//   Age Validator:

let age = 22;

if (age <= 13) {
    console.log("Child");
}
else if (age <= 19) {
    console.log("Teenager");
}
else if (age <= 59) {
    console.log("Adult");
}
else {
    console.log("Seniour");
}




// Grade Calculator

let totalMarks = 87;

if (totalMarks >= 90) {
    console.log("Grade : A+ ");
}
else if (totalMarks >= 75) {
    console.log("Grade : A ");
}
else if (totalMarks >= 60) {
    console.log("Grade : B ");
}
else if (totalMarks >= 45) {
    console.log("Grade : C ");
}
else {
    console.log("Fail");
}





// Largest Of Three numbers

let num1 = 77;
let num2 = 88;
let num3 = 20;

if (num1 > num2 && num1 > num3) {
   console.log("Largest is " + num1);
}
else if (num2 > num1 && num2 > num3) {
  console.log("Largest is " + num2);

}
else {
   console.log("Largest is " + num3);
}





// Leap Year rogram

let year = 2042;

if ((year % 400 == 0) || (year % 4 == 0 && year % 100 !== 0)) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is Not a Leap Year");
}