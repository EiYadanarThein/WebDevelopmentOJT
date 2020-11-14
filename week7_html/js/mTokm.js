document.addEventListener("DOMContentLoaded",function()
{
    document.getElementById("m").oninput=()=>
    {
        var mile=document.getElementById("m").value;
        var res=mile*1.609+" km";
        document.getElementById("km").value=res;
    }

    document.getElementById("km").oninput=()=>
    {
        var kilo=document.getElementById("km").value;
        var res=kilo/1.609+" m";
        document.getElementById("m").value=res;
    }
})