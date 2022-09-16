/*
7. Dado que a fórmula para conversão de Fahrenheit para Celsius é C = 5/9 (F – 32), ler um
valor de temperatura em Fahrenheit e exibi-lo em Celsius C/5 = (TF – 32)/9
*/
const F = prompt("Digite um valor em Fahrenheit:");
let C = 5 * ((F - 32)/9);
alert(F + " Fahrenheit equivale a " + C);