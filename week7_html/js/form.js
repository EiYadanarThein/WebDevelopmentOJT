document.addEventListener("DOMContentLoaded",function()
{
    document.getElementById("submit").onclick=()=>
    {
        console.log(document.form1.username.value);

        console.log(document.form1.length);

        console.log(document.forms["form1"][0].value);

        return false;
    }
})