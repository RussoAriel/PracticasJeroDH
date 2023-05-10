/*
 Que el cliente ingrese tres números por teclado y devolver por pantalla:
- El resultado de la suma de los tres números
- La multiplicación del primer número con el tercero
- La resta del segundo número con el primero
*/

let readlineSync = require('readline-sync');
let numero1 = readlineSync.question('Ingrese el primer numero ');
let numero2 = readlineSync.question('Ingrese el segundo numero ');
let numero3 = readlineSync.question('Ingrese el tercer numero ');

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);
numero3 = parseInt(numero3);
console.log("La suma es: " + (numero1+numero2+numero3));
console.log("La multiplicacion es: " + (numero1*numero3));
console.log("La resta es: " + (numero2-numero1));
