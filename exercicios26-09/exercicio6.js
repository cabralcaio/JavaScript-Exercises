// 6. Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em
// P.A. contendo 10 valores.
const A = parseInt(prompt("Digite o valor inicial da progressão aritmética: "));
const R = parseInt(prompt("Digite o valor da razão da progressão aritmética: "));
const progressao = [];
let resultado = A;

for (let i = 1; i <= 10 ; i++) {
    resultado += R
    progressao.push(resultado);
}

alert(" O resultado é: " + progressao)