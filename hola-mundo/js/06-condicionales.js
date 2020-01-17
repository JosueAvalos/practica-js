'use strict'

// Condicional if

// Si edad1 es mayor a edad2 ejecuta el siguiente código

var edad1 = 30;
var edad2 = 12;


if(edad1>edad2){                                // Evalua si la condición se cumple
  console.log("Edad 1 es mayor que Edad 2");    // Si se cumple la condición se ejecuta está línea
} else{                                         // Si no se cumple la condición entonces ejecuta lo siguiente
  console.log("Edad 1 es inferior");
}

// Si edad1 es menor a edad2 ejecuta el siguiente código

edad1 = 10;
edad2 = 20;

if(edad1>edad2){                                // Evalua si la condición se cumple
  console.log("Edad 1 es mayor que Edad 2");    // Si se cumple la condición se ejecuta está línea
} else {                                        // Si no se cumple la condición entonces ejecuta lo siguiente
  console.log("Edad 1 es inferior"); 
}

// Si usuario es mayor de edad

var edad = 18;
var nombre = 'David Suarez';

/*
  Operadores relacionales
  Mayor: >
  Menor: <
  Mayor o igual: >=
  Menor o igual: <=
  Distinto: !=
*/

if( edad >= 18 ){
  console.log(nombre+" tiene " +edad+" años");
}
// } else {
//   console.log("El usuario en menor de edad");
// }