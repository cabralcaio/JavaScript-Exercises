/*
3. Dado o tamanho do raio de uma circunferência, calcular a área e o perímetro da mesma.
*/
const raio = parseFloat(prompt("Digite o o tamanho do raio de uma circunferência:"));  

const area = 3.1415 * raio * raio;
const perimetro = 2 * 3.1415 * raio ;

alert(`O valor da area é ${area} e do perimetro é ${perimetro}`);

