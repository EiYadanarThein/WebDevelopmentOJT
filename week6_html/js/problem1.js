document.getElementById("color").onchange=colorchange;

function colorchange(){

   
    var col=document.getElementById("color").value;
    switch(col){
        case "red":
      document.getElementById("one").style.color="red";
      document.getElementById("two").style.color="red";
      document.getElementById("three").style.color="red";
      document.getElementById("four").style.color="red";
      document.getElementById("five").style.color="red";
    break;

       case "green":
        document.getElementById("one").style.color="green";
        document.getElementById("two").style.color="green";
        document.getElementById("three").style.color="green";
        document.getElementById("four").style.color="green";
        document.getElementById("five").style.color="green";
      break;

      case "blue":
        document.getElementById("one").style.color="blue";
        document.getElementById("two").style.color="blue";
        document.getElementById("three").style.color="blue";
        document.getElementById("four").style.color="blue";
        document.getElementById("five").style.color="blue";
      break;
      default:
        document.getElementById("one").style.color="black";
        document.getElementById("two").style.color="black";
        document.getElementById("three").style.color="black";
        document.getElementById("four").style.color="black";
        document.getElementById("five").style.color="black";
    

    }
    
    
    
}
