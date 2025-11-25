// ARRAY


let prices = [15.99, 125.50, 8.75, 200.00, 35.20];
let array=[];
for(i=0; i<prices.length;i++)
{
   if(prices[i]>=100)
   {
    array.push(prices[i])
   }
}

console.log("Intial array : "+prices);
console.log("Second array :"+array);