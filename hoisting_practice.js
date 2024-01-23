//variable hoisting 
/*console.log(a)
var a=10          //will get undefined
console.log(b)
let b=10          //will get reference error:cannot access b before initiallization

var a
console.log(a)*/

//functional hoisting    calling the function before function definition
func()     //executing this alone will give reference error
function func()
{
    console.log("Vamsheni k")
}
