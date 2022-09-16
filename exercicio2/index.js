/*
2. Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo.
*/
const lado = parseFloat(prompt("Digite o lado de um quadrado:"));  

const area = lado * lado;
const perimetro = lado * 4;

alert(`O valor da area é ${area} e do perimetro é ${perimetro}`);

