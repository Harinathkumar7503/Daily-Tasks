
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






