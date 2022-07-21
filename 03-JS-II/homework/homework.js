// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  var mayor;
  if(x>y){
    mayor = x;
  } else {
    mayor = y;
  }
  return mayor;
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  var mayor;
  if(edad >= 18){
    mayor = 'Allowed';
  }else if(edad < 18){
    mayor = 'Not allowed';
  }
  return mayor;
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  var user;
  if (status === 1) {
    user = 'Online';
  } else if(status === 2){
    user = 'Away';
  }else{
    user = 'Offline';
  }
  return user;
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  var hola;
  if(idioma === 'aleman'){
    hola = 'Guten Tag!';
  }else if(idioma === 'mandarin'){
    hola = 'Ni Hao!';
  }else if(idioma === 'ingles'){
    hola = 'Hello!';
  }else {
    hola = 'Hola!';
  }
  return hola;
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  var es;
  switch(color){
    case 'blue':
      es = 'This is blue';
      break;
    case 'red':
      es = 'This is red';
      break;
    case 'green':
      es = 'This is green';
      break;
    case 'orange':
      es = 'This is orange';
      break;
    default:
      es = 'Color not found';
  }
  return es;
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  var doc;
  if( numero === 10 || numero === 5){
    doc = true;
  }else {
    doc = false;
  }
  return doc;
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if(numero > 20 && numero < 50){
    return true;
  }else {
    return false;
  }
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
if(numero === Math.floor(numero)){
  return true;
}else {
  return false;
}
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if((numero % 3) === 0 && (numero % 5) === 0){
    return 'fizzbuzz';
  }else if((numero % 3) === 0){
    return 'fizz';
  }else if((numero % 5) === 0){
    return 'buzz';
  }else {
    return numero;
  }
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  if(num1 === 0 || num2 === 0 || num3 === 0){
    return 'Error';
  }else if(num1 < 0 || num2 < 0 || num3 < 0){
    return 'Hay negativos';
  }else if(num1 > num2 && num1 > num3 && num1 > 0){
    return 'Número 1 es mayor y positivo';
  }else if(num3 > num1 && num3 > num2){
    num3++;
    return num3;
  }else {
    return false;
  }
}


function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if(numero < 2){
    return false;
  }
  for(let i = 2; i < numero; i++){
    if(numero % i === 0){
      return false;
    }
  }
  return true;
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if(valor === true){
    return 'Soy verdadero';
  } else {
    return 'Soy falso';
  }
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  return [0,6,12,18,24,30,36,42,48,54,60];
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  if(numero > 99 && numero < 1000){
    return true;
  }else{
    return false;
  }
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var i = 0;
  do{
    numero = numero + 5;
    i++;
  }while(i < 8);
  return numero;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
