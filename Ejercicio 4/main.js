let getname = (nombre) =>{
    return nombre
}
console.log(getname('Vladimir'))



function dictador(Francolachupa){
    console.log(Francolachupa)
}
dictador(true)

function infinite(...params){
    params.forEach(element => {
        console.log(element)
            });
}

infinite(1,2,3,4,5)