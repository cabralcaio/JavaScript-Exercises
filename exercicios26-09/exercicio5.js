// 5. Crie um código que receba 3 valores do comprimento de um triângulo e depois mostre
//  um alert informando se o triângulo é equilátero, isóceles ou escaleno.

const lado1 = prompt("Digite o lado 1 do triângulo");
const lado2 = prompt("Digite o lado 2 do triângulo");
const lado3 = prompt("Digite o lado 3 do triângulo");

if (lado1 == lado2 & lado2 == lado3){
    alert("Triângulo equilátero");
} else if (lado1 != lado2 & lado2 != lado3 & lado1 != lado3) {
    alert("Triângulo escaleno");
} else {
    alert("Triângulo isóceles");
}