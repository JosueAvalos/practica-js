'use strict'

// Switch

// Solo evalúa la variable exacta al número en cada caso, los digítios son neutros

var edad = 41;
var imprime = "";

switch(edad) {
  case 18:
    imprime = "Acabas de cumplir la mayoría de edad";
  break;
  case 25:
    imprime = "Ya eres un adulto";
  break;
  case 40:
    imprime = "Crisis de los cuarenta";
  break;
  case 75:
    imprime = "Ya eres un adulto";
  break;
  default:
    imprime = "Tu edad es neutra";
  break;
}

console.log(imprime);