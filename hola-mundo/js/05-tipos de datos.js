'use strict'

// Operadores

var numero1 = 7
var numero2 = 12
var suma = numero1 + numero2
var resta = numero1 - numero2
var multiplicacion = numero1 * numero2
var division = numero1 / numero2
var porcentaje = numero1 % numero2

console.log("EL resultado de la suma es: "+ suma)
console.log("El resultado de la resta es : "+ resta)
console.log("El resultado de la multiplicacion es: "+ multiplicacion)
console.log("El resultado de la division es: "+ division)
console.log("El resultado del porcentaje es: "+ porcentaje)

// Tipos de datos

var numero_entero = 44
var cadena_texto = 'Hola "que" hace'
var verdadero_o_falso = false

var numero_falso = "33.4"

console.log(numero_entero)
console.log(cadena_texto)
console.log(parseInt(numero_falso)+7)
console.log(parseFloat(numero_falso)+7)
console.log(String(numero_entero)+4)

console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof verdadero_o_falso);
console.log(typeof numero_falso);
