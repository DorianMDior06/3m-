"use strict"
const numeros = [2, 3, 2, 3, 5];
alert("Índices en orden ascendente:");
for (let i = 0; i < numeros.length; i++) {
    if (i % 2 === 0) { 
        alert(`Indice:${i}, Valor:${numeros[i]}`);
    } else {
        alert(`Indice:${i}, Valor:${numeros[i]}`);
    }
}
alert("Índices en orden descendente:");
for (let i = numeros.length - 1; i >= 0; i--) {
    if (numeros[i] > 2) { 
        alert(`Indice:${i}, Valor:${numeros[i]}`);
    } else {
        alert(`Indice:${i}, Valor:${numeros[i]}`);
    }
}