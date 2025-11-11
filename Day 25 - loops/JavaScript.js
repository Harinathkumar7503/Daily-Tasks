


//Checking stock availability until quantity run out.

let stack=4;
while(stack>0)
{
    console.log("item available  " + stack);
    stack--;

}
console.log("item not available ");



// 2. Sum of Number from 1 to 20.
console.log("------ Sum of Number from 1 to 20.--------------")
let sum=0;
let num=20;
for(let i=1; i<=num; i++)
{
    sum=sum+i;

}
console.log("Sum of 1 to "+num+ " is "+sum);

// 3. Reverse Countdown 10 to 1.


console.log("----- Reverse Countdown 10 to 1-------------")
let n=1;

for (let i=10; i>=n; i--)
{
 console.log("Contdown : "+ i);
}

// 4. Sum of even Number, 1 to 50

console.log("------Sum of even numbers upto 50--------")
let nn=50;
let s=0;
for(let i=1; i<=nn; i++)
{
    if(i%2==0)
    {
         s=s+i;
    }
    
}

console.log("Sum of even numbers 1 t0 50 is : "+s);




