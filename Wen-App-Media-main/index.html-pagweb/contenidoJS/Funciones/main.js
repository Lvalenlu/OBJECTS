'use strict';
//Función cásica en JS
function nombreFuncion (/** recibo de parametros */){
    /**Cuerpo de la función */
    return 0;
}

//Invicación de la función
//nombreFuncion();

function suma (num1, num2){
    return num1 + num2;
}

let result = 0;
result = suma(3,5);
console.log(result);

//Funcion tipo flecha

const resta = (num1=1, num2=1) => {
    return num1 - num2;
}

console.log(resta(12));