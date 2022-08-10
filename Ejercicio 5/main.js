function lanzar(){
    let moneda = Math.round(Math.random())
    if(moneda==1){
        console.log("cara")
    }else if(moneda==0){
        console.log("cruz")
    }
};

lanzar()