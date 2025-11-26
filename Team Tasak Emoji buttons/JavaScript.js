  let text=document.getElementById('text');
        document.getElementById('happy').addEventListener("click",function()
    {
        document.body.style.backgroundColor="yellow";
        text.textContent="Iam feeling Great";
    
    });

          document.getElementById('sad').addEventListener("click",function()
    {
        document.body.style.backgroundColor="Blue";
        text.textContent="Iam feeling down";
    
    });

          document.getElementById('angry').addEventListener("click",function()
    {
        document.body.style.backgroundColor="red";
        text.textContent="Iam feeling frustated";
    
    });

           document.getElementById('sleep').addEventListener("click",function()
    {
        document.body.style.backgroundColor="blueviolet";
        text.textContent="I need a nap";
    
    });