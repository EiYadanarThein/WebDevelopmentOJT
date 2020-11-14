document.addEventListener("DOMContentLoaded",function()
{   document.getElementById("text2").disabled=true;
    document.getElementById("countryside").onclick=()=>
    {
        document.getElementById("text2").disabled=false;
        document.getElementById("text1").value="";
    }
   

    document.getElementById("downtown").onclick=()=>
    {
        document.getElementById("text2").disabled=true;
        document.getElementById("text1").value="";
        document.getElementById("text2").value="";
    }

    //button submit

    document.getElementById("submit").onclick=()=>
    {
        if(document.getElementById("downtown").checked)
        {   
            document.getElementById("show").innerHTML="Address:"+document.getElementById("text1").value;
           
           
        }
        else
        {
            document.getElementById("show").innerHTML="Address:"+document.getElementById("text1").value;
            document.getElementById("show").innerHTML+="<br>Hostel Address:"+document.getElementById("text2").value;
           
        }
        if(document.getElementById("text1").value=="")
        {
            document.getElementById("text1").value="please enter address!";
            document.getElementById("text1").style.color="red";
        }
        else
        {
            document.getElementById("text1").value="";
        }

        if(document.getElementById("text2").value=="" & document.getElementById("text2").disabled==false)
        {
            document.getElementById("text2").value="please enter hostel address!";
            document.getElementById("text2").style.color="red";
        }
        else
        {
            document.getElementById("text2").value="";
        }
    }
})
