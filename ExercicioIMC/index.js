const altura = parseFloat(prompt("Digite sua altura:"));
const peso = parseFloat(prompt("Digite seu peso:"));

const imc = peso / (altura * altura);

if (imc < 18.5){
    alert("Abaixo do peso. O seu imc é: " + imc);
} else if (imc < 26){
    alert("Peso normal. O seu imc é: " + imc);
} else if (imc < 30){
    alert("Acima do peso. O seu imc é: " + imc);
} else {
    alert("Obeso. O seu imc é: " + imc)
}