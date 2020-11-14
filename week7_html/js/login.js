document.addEventListener("DOMContentLoaded",function()
{
    document.querySelector("#login").onclick=()=>
    {
        if(document.querySelector("#textbox").value=="")
        {
            document.querySelector("#show1").innerHTML="Please enter username";
        }
        else
        {
            document.querySelector("#show1").innerHTML="";
        }
        if(document.querySelector("#passbox").value=="")
        {
            document.querySelector("#show2").innerHTML="Please enter password";
        }
        else
        {
            document.querySelector("#show2").innerHTML="";
        }
   
    }
    
})