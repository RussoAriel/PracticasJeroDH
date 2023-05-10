/*
Que el usuario ingrese un número por teclado. 
Si ese número se encuentra entre el 7 y el 18, mostrarpor consola “encontrado”. 
*/

let readlineSync = require('readline-sync');
let numero = readlineSync.question('Ingrese un numero ');
numero=parseInt( numero);
if(numero>=7 && numero<=18){
  console.log("encontrado");
}