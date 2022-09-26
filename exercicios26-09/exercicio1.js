// 1. Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e
// mostrar :
//     a. A menor altura do grupo;
//     b. A maior altura do grupo;
const pessoas = [];
let maiorAltura = 0;
let menorAltura = 99999;

for (let i = 1; i <= 15; i++){
    const altura = parseFloat(prompt(`Digite a altura da ${i}º pessoa`));
    pessoas.push(altura);
}

for (let altura2 of pessoas){
    if(altura2 > maiorAltura){
        maiorAltura = altura2;
    }

    if(altura2 < menorAltura){
        menorAltura = altura2;
    }
}

alert("A maior altura é: " + maiorAltura);
alert("A menor altura é: " + menorAltura);