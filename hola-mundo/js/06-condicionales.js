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
  console.log(nombre+" tiene " +edad+" años, es mayor de edad");

  if( edad <= 33 ){
    console.log("Todavía eres millenial");
  } else if( edad >= 70 ){
    console.log("Eres anciano");    
  } else {
    console.log("Ya no eres millenial");  
  }

} else {
  console.log(nombre+" tiene " +edad+" años, es menor de edad");
}

edad = 50;
nombre = 'David Cureño';

console.log(nombre+" tiene " +edad+" años, es mayor de edad");
if( edad <= 33 ){
    console.log("Todavía eres millenial");
  } else if( edad >= 70 ){
    console.log("Eres anciano");    
  } else {
    console.log("Ya no eres millenial");  
  }

edad = 75;
nombre = 'Luisa Garrido';

console.log(nombre+" tiene " +edad+" años, es mayor de edad");
if( edad <= 33 ){
    console.log("Todavía eres millenial");
  } else if( edad >= 70 ){
    console.log("Eres anciano");    
  } else {
    console.log("Ya no eres millenial");  
  }

edad = 10;
nombre = 'David Mendel'

if( edad >= 18 ){
  console.log(nombre+" tiene " +edad+" años, es mayor de edad");
} else {
  console.log(nombre+" tiene " +edad+" años, es menor de edad");
}

/*
  Operadores Lógicos
  AND(Y): &&
  OR(O): ||
  Negación: !
*/

var year = 2018;

// Negación

if(year != 2016){
  console.log("El año no es 2016 realmente es: "+year);
}

// AND

if(year >= 2000 && year <= 2020){
  console.log("Estamos en la era actual"); 
} else {
  console.log("Estamos en la era post moderna");
}

/* OR */

if (year == 2008 || (year >= 2018 && year == 2028)) {
  console.log("El año acaba en 8");
} else {
  console.log("Año no registrado");
  
}