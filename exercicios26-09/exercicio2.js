//2. Escreva um algoritmo que leia um valor inicial A e imprima o seu fatorial

const num = prompt("Insira um número");
let resultado = num * (num - 1);

if(num == 1 || num == 0) {
    resultado = 1;
} else {
    for (let i = num - 2; i > 0; i--){
        resultado = resultado * i;
    }
}



alert(`O resultado de ${num}! é: `+ resultado);