"use strict"
let numeros=[5,10,7,15,12];
let numeroM=numeros[0];
for (let i=1; i < numeros.length; i++) {
    if (numeros[i]>numeroM) {
        numeroM=numeros[i];
    }
    
}
alert("El numero mayor es "+numeroM);