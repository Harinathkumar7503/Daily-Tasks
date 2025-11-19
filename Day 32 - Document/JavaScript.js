// TO DO LIST 

function addTask()
{
   
 let text= document.getElementById('text').value;

 const create=document.createElement('li');
 create.textContent=text;

 const UL=document.querySelector('ul');
 UL.append(create);
 
 const removeBT= document.createElement('button');
 removeBT.textContent="REMOVE";
 removeBT.className="remove-btn";

 removeBT.addEventListener("click", function(Remove)
{

     create.remove();
});

create.append(removeBT);

 
}

// Change the Image on click.

function change()
{

  let img=  document.getElementById('image');
   let image =  document.getElementById('image').src="Sources/Down.png";
  if(img)
  {
     document.getElementById('image').src="Sources/Down.png";
  
  }
  else if(image){
    document.getElementById('image').src="Sources/up.png";
  }
}

// Count 
let count=0;
function increment()
{
    count++;
    document.getElementById('Recult').innerHTML="Count : <b>"+count+"</b>";

}
function Decrese()
{
    count--;
    document.getElementById('Recult').innerHTML="Count : <b>"+count+"</b>";
    
}


// show / hide

let Hide = document.getElementById('show').value;

function showfunction()
{
    document.getElementById('show').type="text";
}

function hidefunction()
{
    document.getElementById('show').type="password";
}


// Serach

let Item=["Harinath","Ram","Ravi","HNK","Kiran","Ajay ","Kumar"];

function serach()
{
let a=document.getElementById('Serrch').value.toLowerCase();
let resul=Item.filter(i=>i.includes(a));

document.getElementById('Items').innerHTML=resul.length>0? resul.join(" , "): "Not found"
}
