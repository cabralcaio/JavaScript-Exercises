// 7. Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em
// P.G. contendo 10 valores.

const A = parseInt(prompt("Digite o valor inicial da progressão geométrica: "));
const R = parseInt(prompt("Digite o valor da razão da progressão geométrica: "));
const progressao = [];
let resultado = A;

for (let i = 1; i <= 10 ; i++) {
    resultado = R * resultado;
    progressao.push(resultado);
}

alert(" O resultado é: " + progressao)