// Calculator

let a;
let b;
function values()
{
   a = parseFloat(document.getElementById('num1').value);
     b = parseFloat(document.getElementById('num2').value);
}
function add() {
     values();
    
         document.getElementById('result').innerHTML = "Result : <strong>"+(a+b)+"</strong>";
}

function sub()
{
      values();
       
            document.getElementById('result').innerHTML = "Result : <strong>"+(a-b)+"</strong>";
           
}
function mul()
{
      values();

       document.getElementById('result').innerHTML = "Result : <strong>"+(a*b)+"</strong>";
        
}
function div()
{
      values();
            document.getElementById('result').innerHTML = "Result : <strong>"+(a/b)+"</strong>";
            
}

// paera 


function para()
{
 document.getElementById('para').style.display="none";
}


function show()
{
     document.getElementById('para').style.display="block";
}

// count 

function count()
{

let d= document.getElementById('text').value;
  let len = d.length;

  document.getElementById('output').innerHTML="Count : <strong>"+len+"</strong>";

}


   //  Dark mode

     function toggleDiv() {
            let box = document.getElementById('box');

            if (box.style.backgroundColor === "white") {
                box.style.backgroundColor = "black";
                box.style.color = "white";
            } else {
                box.style.backgroundColor = "white";
                box.style.color = "black";
            }
        }


