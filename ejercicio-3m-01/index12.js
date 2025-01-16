"use strict"
const numeros = [3, 2, 4, 1];
let suman = 0;
for (let i = 0; i < numeros.length; i++) {
    for (let j = i + 1; j < numeros.length; j++) {
        const suma = numeros[i] + numeros[j];
        if (suma > suman) {
            suman = suma;
        }
    }
}
alert(`El número mayor de las sumas es: ${suman}`);