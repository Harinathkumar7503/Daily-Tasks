
/*    Right angle traiangel

        *    
      * *
    * * *    
  * * * *    
* * * * *                                                                       */

console.log("______Right angle trianle___________");
for (let i=1; i<=5; i++)
{
      let pattern ="";
    for(let j=5; j>i;j--)
    {
            pattern = pattern+"  ";
    }
    for(let j=1; j<=i; j++)
    {
         pattern = pattern+"* ";
    }

    console.log(pattern)
}



console.log("______Phyramid Pattern___________");

//  Pyramid triangle problem

/*       *           
       * * *        
     * * * * *      
   * * * * * * *     
 * * * * * * * * *                                      */



for(let i=1; i<=5; i++)
{
let pattern="";
for(let j=5; j>i; j--)
{
pattern= pattern+"  ";
}

for(let j=1;j<=i; j++)
{
     pattern = pattern+"* ";
}
for(let j=i-1; j>=1;j--)
{
     pattern = pattern+"* ";
}

    console.log(pattern)
}



/*  3. Display all Products

colors = ["red", "green", "blue"];

 sizes = ["S", "M", "L"];

 O/p : Red -S. Red – M, Red – L, Green-S…….       */

console.log("______Display all Products_________");
 let colors=["Orange", "Blue","Green"];

 let sizes =["M","S","L"];

 console.log(colors.length);
  console.log(sizes.length);

  let cl=colors.length;
  let sl= sizes.length;


  for(let i=0; i<cl; i++)
  {
    for(let j=0; j<sl; j++)
    {
        
 console.log("coolors "+colors[i]+" size "+sizes[j]);

    }
  }

  
// for(let color of colors)
// {
//     for(let size of sizes)
//     {
//                  console.log("color = " + color+" Size - "+size)
//     }


// }