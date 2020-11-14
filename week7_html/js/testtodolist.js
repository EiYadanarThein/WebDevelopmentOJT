document.addEventListener("DOMContentLoaded",function()
{
    document.querySelector("#submit").onclick=()=>
    {
        if(document.querySelector("#tasks").value!="")
        {
            var listitem=document.createElement("li");
            listitem.innerHTML=document.querySelector("#tasks").value ;
            document.querySelector("#dotasks").append(listitem);
            
            
           
        }
        document.querySelector("#tasks").value="";
        document.getElementById("submit").disabled = true;
        return false;
    }
    document.querySelector("#tasks").addEventListener("click",()=>
    {
        document.getElementById("submit").disabled = false;
        
    });
    
       
        
           
        
   
})