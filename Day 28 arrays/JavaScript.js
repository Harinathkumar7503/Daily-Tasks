//   14- nov - 2025 


/*1. Group students based on Marks

a. Input: [40, 85, 90, 33, 72]

b. Output:

i. Pass: >= 40

ii. Fail < 40.*/


let Marks=[78,90,88,67,32,23,90];

let pass=Marks.filter(m => m>=40);
let fail= Marks.filter(m => m<40);

console.log("Pass : "+pass);
console.log("Fail : "+fail);

// method 2 

let p=[];
let f=[];
for(let i=0; i<Marks.length; i++)
{
    if(Marks[i]>=40)
    {
        p.push(Marks[i]);
    }
    else{
        f.push(Marks[i]);
    }
}

console.log("Pass = "+p);
console.log("Fail = "+f);

//Count how many numbers in an array are greater than 50.

let a=[27,90,78,90,45,10,1,2,3,];

let count =0;
let elements=[];
for(let i=0; i<a.length; i++)
{
    if(a[i]>50)
    {
        elements.push(a[i]);
        count++;
        
    }
}
console.log("----------------------");
console.log("===Count how many numbers in an array are greater than 50===" );
console.log("Array is :"+a );
console.log("elements are :"+elements );
console.log("Conut = "+count );

//Find all Prime numbers in an array
    

 let aa=[23,45,2,3,5,7,8,11,8,90,66];
 let prime=[];
for(let i=0; i<aa.length; i++)
{
    let flag=true;

    if(aa[i]<=1)
    {
        continue;
    }
    for(let j=2; j<aa[i];j++)
    {
        if(aa[i]%j==0)
        {
            flag=false;
            break
        }
    }
    if (flag)
    {
        prime.push(aa[i]);
    }
}
console.log("Prime numbers are : "+prime)
console.log("----------------------");
// swap first and last element of arry
console.log("==swap first and last element of arry==")
let B=[33,56,89,90,77,89,56];
console.log("Arry intial : "+B);

let temp =B[0];
B[0]=B[B.length-1];
B[B.length-1]=temp;

console.log("Array after swapping : "+B);


// Second Heighest value 

let C=[23,67,89,9,77,66,99,11,100];
let max=C[0];
let smax=C[0];

for(let i=0; i<C.length; i++)
{
    if(C[i]>max)
    {
        smax=max;
        max=C[i];
    }
    else if(C[i]>smax && C[i]!=max)
    {
        smax=C[i];
    }
}
console.log("----------------------");
console.log("========Second max======");
console.log("Array : "+C);
console.log("MAX = "+max);
console.log("Second MAX = "+smax);

// Move all zeros to the end of the array

// a. Input [1,0,5,0,9], Output [1,5,9,0,0]

let D=[1,2,3,0,6,8,0,0,0];

let nonZero=[];
let zero=[];
let Merge=[];
for(let i=0; i<D.length; i++)
{
    if(D[i]==0)
    {
        zero.push(0);
    }
    else{
       nonZero.push(D[i]); 
    }
}

// mergerge

for(let i=0; i<nonZero.length;i++)
{
   Merge.push(nonZero[i]);
}
for(let i=0; i<zero.length; i++)
{
     Merge.push(zero[i]);
}
console.log("----------------------");
console.log("=====Move all zeros to the end of the array====");
console.log("Normal Arry : "+D);
console.log("fINAL ARRAY "+Merge);