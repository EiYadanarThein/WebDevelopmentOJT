document.getElementById("thumb").onclick=alertbox;
document.getElementById("thumb").onmouseover=change;
document.getElementById("thumb").onmouseout=out;

document.getElementById("heart").onclick=alertbox1;
document.getElementById("heart").onmouseover=change1;
document.getElementById("heart").onmouseout=out1;

document.getElementById("sad").onclick=alertbox2;
document.getElementById("sad").onmouseover=change2;
document.getElementById("sad").onmouseout=out2;

document.getElementById("spoon").onclick=alertbox3;
document.getElementById("spoon").onmouseover=change3;
document.getElementById("spoon").onmouseout=out3;

document.getElementById("bed").onclick=alertbox4;
document.getElementById("bed").onmouseover=change4;
document.getElementById("bed").onmouseout=out4;

function alertbox()
{
   alert (document.getElementById("result").innerHTML="You Liked post.");
}
function change()
{
    document.getElementById("thumb").style.color="blue";
   
    
}
function out()
{
    document.getElementById("thumb").style.removeProperty("color");
}

function alertbox1()
{
   alert (document.getElementById("result").innerHTML="You loved post.");
}
function change1()
{
    document.getElementById("heart").style.color="red";
   
    
}
function out1()
{
    document.getElementById("heart").style.removeProperty("color");
}

function alertbox2()
{
   alert (document.getElementById("result").innerHTML="You felt angry.");
}
function change2()
{
    document.getElementById("sad").style.color="yellow";
   
    
}
function out2()
{
    document.getElementById("sad").style.removeProperty("color");
}

function alertbox3()
{
   alert (document.getElementById("result").innerHTML="You felt hungry.");
}
function change3()
{
    document.getElementById("spoon").style.color="green";
   
    
}
function out3()
{
    document.getElementById("spoon").style.removeProperty("color");
}

function alertbox4()
{
   alert (document.getElementById("result").innerHTML="You felt asleep.");
}
function change4()
{
    document.getElementById("bed").style.color="pink";
   
    
}
function out4()
{
    document.getElementById("bed").style.removeProperty("color");
}

