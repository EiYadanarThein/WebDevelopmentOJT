document.addEventListener("DOMContentLoaded",function()
{
   var list=['one','two','three','four','five'];
   list.forEach(function(element)
   {
       document.getElementById(element).onclick=()=>
       {
           document.querySelector('h2').innerHTML=element;
            var cls=document.getElementById(element).className;
           console.log(cls);
           if(cls.includes("unchecked"))
           {
               document.getElementById(element).classList.remove("unchecked");
               document.getElementById(element).classList.add("checked");
           }
           else
           {
                document.getElementById(element).classList.remove("checked");
                document.getElementById(element).classList.add("unchecked");
           }
       }
   })
})
