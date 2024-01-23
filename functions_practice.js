//Functions
//Example 1
//function without argument and without return type
function function_1()
{
   console.log("Sample Example")
}
function_1()

/*example 2
Function with argument and without return type*/
function function_2(a,b)
{
    console.log("The greatest number is:")
    if(a>b)
    {
        console.log(a)
    }
    else{
        console.log(b)
    }
}
function_2(5,10)

/*Example 3
Function with argument and with return type*/
function function_3(a)
{
    if(a>0)
    {
        return 1
    }
    else{
        return 0
    }
}
n=function_3(10)
if(n)
{
    console.log("Positive number")
}
else{
    console.log("Negative number")
}

/*Example 4
Function without argument and with return type*/

function function_4()
{
    var a="Vamsheni"
    return a
}
console.log(function_4())

