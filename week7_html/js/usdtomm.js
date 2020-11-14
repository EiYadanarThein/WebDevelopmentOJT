document.addEventListener("DOMContentLoaded",function()
{
    document.getElementById("usd").oninput=()=>
    {
        var us=document.getElementById("usd").value;
        var res=us*1300+" kyats";
        document.getElementById("mm").value=res;
    }
})