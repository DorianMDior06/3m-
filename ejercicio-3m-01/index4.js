"use strict"
let num = [0, 2, 4, 8];

for (let i = 0; i < num.length; i++) {
    for (let j = i; j < num.length; j++) {
       alert(num[i]+""+num[j]);
    }
}