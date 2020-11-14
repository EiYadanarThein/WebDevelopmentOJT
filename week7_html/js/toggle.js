document.addEventListener("DOMContentLoaded",function()
{
    document.getElementById("mydiv2").style.display="block";
    document.getElementsByTagName("button")[0].addEventListener("click",function()
    {
        document.getElementById("mydiv").classList.toggle("testdiv");

        if(document.getElementById("mydiv2").style.display=="block")
        {
            document.getElementById("mydiv2").style.display="none";
        }
        else
        {
            document.getElementById("mydiv2").style.display="block";
        }
    })
})