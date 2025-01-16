"use strict"
const frase= "Vida solo hay una.";
let cont=0;
for (let i = 0; i < frase.length; i++) {
    if (frase[i]==' '||frase[i]=='.') {
        cont++;
    }
}
alert("Hay "+cont+" palabras en la frase "+frase);