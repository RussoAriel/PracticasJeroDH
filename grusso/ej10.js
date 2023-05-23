/*Al ejercicio 9 agregarle que pueda ingresar los valores de cada alumno por teclado. */
let readline = require("readline-sync");

let alumnos=[];
let parcial_1=[];
let parcial_2=[];
let parcial_3=[];

for (let index = 0; index < 7; index++) {

  let alumno =readline.question("Ingrese nombre del alumno: ");
  alumnos.push(alumno);
  let nota_1 = readline.question("Ingrese la nota del primer parcial: ");
  parcial_1.push(nota_1);
  let nota_2 =readline.question("Ingrese la nota del segundo parcial: ");
  parcial_2.push(nota_2);
  let nota_3 =readline.question("Ingrese la nota del tercer parcial: ");
  parcial_3.push(nota_3);
}
//console.table(alumnos);


console.log("El alumno " + alumnos[6]); 
console.log("Tiene la nota "+ parcial_1[6] + " en el primer parcial");
console.log("La nota "+ parcial_2[6] + " en el segundo parcial");
console.log("La nota "+ parcial_3[6] + " en el tercer parcias");
