/*
1. Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu
perímetro.
*/
const base = parseFloat(prompt("Digite o valor da base do retangulo:"));  
const altura = parseFloat(prompt("Digite o valor da altura do retangulo"));

const area = base * altura;
const perimetro = (base * 2) + (altura * 2);

alert(`O valor da area é ${area} e do perimetro é ${perimetro}`);

