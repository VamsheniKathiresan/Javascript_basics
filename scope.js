var a=10      //Block scope
console.log(a)
{
    let a=5    //local scope
    let b=5
    console.log(a)
    console.log(b)
}
console.log(a)
//console.log(b)     relative error will occur