let numero = 1;
let i = 0;
do{
  //cuando i sea igual a 0 haz o siguiente
  if(i===0){
  //  sumale 1 a i y restale 1 a numero
    i++;
    numero--;
  //muestra en la consola el numero
    console.log(numero);
  // cuando i no sea 0 haz lo siguiente
  }else{
  //sumale 1 a numero
    numero++;
    console.log(numero);
  }
//sigue sumando 1 hasta que llegue a 5
}while (numero <5);