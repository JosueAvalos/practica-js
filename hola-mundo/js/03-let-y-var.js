'use strict'

// Pruebas con let y var

// Prueba con var

var numero = 40
console.log(numero) // valor 40

if(true){
  var numero = 50
  console.log(numero) // valor 50
}

console.log(numero) // valor 50

// Prueba con let

var texto = "Curso JS Josué XA"
console.log(texto)

if(true){
  let texto = "Curso Básico de Poesía"
  console.log(texto)
}

console.log(texto)