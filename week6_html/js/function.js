var num1=1000;
var num2=100;

//function with parameter and return type
var max=compare(num1,num2);
console.log("Max number is "+max);

compare1()

function compare(value1,value2)
{
    if(value1>value2)
    {
        console.log("value1 is greater than value2.");
        return value1;
    }
    else
    {
        console.log("value2 is greater than value1.");
        return value2;
    }
}
// function with no parameter and return type
function compare1()
{
    if(num1>num2)
    {
        console.log("num1 is greater than num2.");
       
    }
    else
    {
        console.log("num2 is greater than num1.");
        
    }
}