/*
4. Dado os três lados de um triângulo determinar o perímetro do mesmo.
*/
const lado1 = parseFloat(prompt("Digite o primeiro lado de um triangulo:")); 
const lado2 = parseFloat(prompt("Digite o segundo lado de um triangulo:"));
const lado3 = parseFloat(prompt("Digite o terceiro lado de um triangulo:"));

const perimetro = lado1 + lado2 + lado3;

alert(`O valor do perimetro é ${perimetro}`);
