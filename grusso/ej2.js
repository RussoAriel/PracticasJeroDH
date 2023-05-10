let readlineSync = require('readline-sync');
let numero = readlineSync.question('Ingrese un numero ');
numero=parseInt( numero);
if(numero>5){
  console.log("aprobado");
}else{
  console.log("no aprobado");
}