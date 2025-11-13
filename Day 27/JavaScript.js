//All Arithmetic operation using functions


function add(a,b)
{
    return a+b;
}

let addition = add(10,7);
console.log("adiition = "+addition);

function sub(a,b)
{
    return a-b;
}
let subtraction = sub(10,7);
console.log("Subtraction = "+subtraction);

function mul(a,b)
{
    return a*b;
}
let multiflication = mul(10,7);
console.log("multiflication = "+multiflication);

function div(a,b)
{
    return a/b;
}
let division = div(10,2);
console.log("Division = "+division);


console.log("=====Calculate total cart values==========")

let cart=[80,90,99,78,90];



function cartt(a)
{
    let sum=0;
    
   for(let i=0; i<a.length; i++)
   {
      sum=sum+a[i];
   }

   return sum;
}
let total = cartt(cart);
 console.log("Toatal = "+ total);

 // discout  = 30%

 let discount =  (total*30)/100;

 console.log("Discout = "+discount);

 let ovoralCost= total-discount;

 console.log("Bill = "+ovoralCost);


 // Convert Celsius – Fahrenheit

 console.log("====Convert Celsius – Fahrenheit======");

 function Fahrenheit(c)
 {
    let f= (c*9/5)+32;
    return f;
 }

 let cel=35;

 let fahrenheit= Fahrenheit(cel);


 console.log("Celsius = "+cel)
 console.log("Fahrenheit = "+fahrenheit);
console.log(cel+" Celsius IS equal to "+fahrenheit);

