async function asAw()
{
    var promise=new Promise(
        function(response){
            setTimeout(function(){
                console.log(response)
            },1000)
        }
    )
}