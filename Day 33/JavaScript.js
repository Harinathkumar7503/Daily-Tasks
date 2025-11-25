


// Increase and decrease the font Size. Take p element and 2 buttons.
let c=15;  

document.getElementById('in').addEventListener("click", function()
{
    let k=c++;
    
document.getElementById('para').style.fontSize=k+"px";

});

document.getElementById('dc').addEventListener("click", function()
{
    let k=c--;
    
document.getElementById('para').style.fontSize=k+"px";

});

//QR code generate 



let image=document.getElementById('Image');

let button=document.getElementById('BB');
BB.addEventListener("click",function()

{
    let textt=document.getElementById('qr').value;
    image.src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+textt;
});



// search

let data = ["Java", "Html", "CSS", "Python", ".NET"];

function search() {
    let s = document.getElementById('text').value.toLowerCase();
    let resul = data.filter(i => i.toLowerCase().includes(s));

    document.getElementById('display').innerHTML = resul.length > 0 ? resul.join(" , ") : "Not found";
}






// FAQ


let faq = document.querySelectorAll('.faq');

faq.forEach(function(FAQ) {
    FAQ.addEventListener("click", function() {
        FAQ.nextElementSibling.classList.toggle("show");
    });
});


