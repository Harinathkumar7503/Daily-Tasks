// LOG OUT

let button=document.getElementById('btn');


setTimeout (function (){
         alert("Your logout automatically within 5 seconds");
},25000);

setTimeout (function()
{
    button.style.backgroundColor="red";
    button.innerHTML="Logout"
   
},30000);


// TASK 2


let current = 0;

function changeLight() {
    
    document.getElementById('red').style.background = "#333";
    document.getElementById('yellow').style.background = "#333";
    document.getElementById('green').style.background = "#333";

    if (current === 0) {
        document.getElementById('red').style.background = "red";
    } else if (current === 1) {
        document.getElementById('yellow').style.background = "yellow";
    } else if (current === 2) {
        document.getElementById('green').style.background = "green";
    }

    current++;
    if (current > 2) current = 0; 
}

setInterval(changeLight, 2000); 
changeLight();