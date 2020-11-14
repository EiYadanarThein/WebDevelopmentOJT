document.getElementById("one").onclick=colorChange;
document.getElementById("two").onclick=colorChange1;
document.getElementById("three").onclick=colorChange2;
document.getElementById("four").onclick=colorChange3;
document.getElementById("five").onclick=colorChange4;
function colorChange()
{
    var col1=document.getElementById("one").style.color;
    if(col1=="red")
    {
        document.getElementById("one").style.color="black";
    }
    else
    {
        document.getElementById("one").style.color="red";
    }
}

function colorChange1()
{
    var col1=document.getElementById("two").style.color;
    if(col1=="red")
    {
        document.getElementById("two").style.color="black";
    }
    else
    {
        document.getElementById("two").style.color="red";
    }
}

function colorChange2()
{
    var col1=document.getElementById("three").style.color;
    if(col1=="red")
    {
        document.getElementById("three").style.color="black";
    }
    else
    {
        document.getElementById("three").style.color="red";
    }
}

function colorChange3()
{
    var col1=document.getElementById("four").style.color;
    if(col1=="red")
    {
        document.getElementById("four").style.color="black";
    }
    else
    {
        document.getElementById("four").style.color="red";
    }
}

function colorChange4()
{
    var col1=document.getElementById("five").style.color;
    if(col1=="red")
    {
        document.getElementById("five").style.color="black";
    }
    else
    {
        document.getElementById("five").style.color="red";
    }
}

