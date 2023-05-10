/*
Al ejercicio 2 agregarle que el usuario solamente pueda ingresar números del 0 al 10
*/
let readlineSync = require('readline-sync');
let numero = readlineSync.question('Ingrese un numero ');
numero=parseInt( numero);

if(numero<0 || numero>10){
  console.log("Numero incorrecto");
}else if(numero>5){
  console.log("aprobado");
}else{
  console.log("no aprobado");
}
