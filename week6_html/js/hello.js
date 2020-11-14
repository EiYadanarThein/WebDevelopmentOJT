function ShowHelloMessage() {
    var name = document.getElementById("myname").value;
    var age=2020-document.getElementById("myage").value;
    var town=document.getElementById("mytown").value;
   
   document.getElementById("hellomessage").innerHTML = "Hello, " + name +"<br>"+name+ " is "+age+" years old."+"<br>"+name+" live in "+town;
    
   
}
document.getElementById("mybutton").onclick = ShowHelloMessage;

document.getElementById("mybutton").onmouseover=calculate;
document.getElementById("mybutton").onmouseout=changecolor;
function calculate()
{
 document.getElementById("mybutton").style.backgroundColor="purple";
 document.getElementById("mybutton").style.color="white";
}
function changecolor()
{
 document.getElementById("mybutton").style.removeProperty("background-color");
 document.getElementById("mybutton").style.removeProperty("color");
}
