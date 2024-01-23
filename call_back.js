//call back
//form examples
//Example_1
function interview_process(selected,nxt_round_instr)
{
    setTimeout(function(){
    if(selected)
    {
        console.log("Got selected")
        nxt_round_instr()
    }
    else{
        console.log("Not selected, Better luck next time")
    }
        
    },2000)
}
function round_2()
{
    console.log("Prepare for GD")
}
interview_process(1,round_2)
//ex2
//form submission example

function submitForm(buttonclick,db){
    setTimeout(function(){
        console.log(buttonclick)
        db()
    },2000)

}

function database(){
    console.log("form submitted successfully")
}
