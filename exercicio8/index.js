/*
8. Faça um algoritmo que calcule e apresente o valor do volume de uma lata de óleo, dado
seu raio e sua altura.
*/
const raio = parseFloat(prompt("Digite o valor do raio da base da lata:"));  
const altura = parseFloat(prompt("Digite o valor da altura da lata:"));

const volume = (3.1415 * raio * raio) * altura;

alert("o volume da lata é: " + volume);