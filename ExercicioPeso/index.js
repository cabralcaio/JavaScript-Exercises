const altura = parseFloat(prompt("Digite sua altura:"));
const genero = prompt("Digite o seu gênero:\n" + "M - Masculinho\n" + "F - Feminino");

if (genero.toUpperCase() == "M") {
    const peso = (72 * altura) - 58;
    alert("O peso ideal é: " + peso.toFixed());
} else {
    const peso = (62.1 * altura) - 44.7;
    alert("O peso ideal é: " + peso.toFixed());
}