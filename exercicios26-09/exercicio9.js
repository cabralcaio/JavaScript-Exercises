// 9. Leia a velocidade máxima permitida em uma avenida e a velocidade com que o motorista
// estava dirigindo nela e calcule a multa que uma pessoa vai receber, sabendo que são
// pagos: 
//     a) 50 reais se o motorista estiver ultrapassar em até 10km/h a velocidade permitida (ex.: velocidade máxima: 50km/h; motorista a 60km/h ou a 56km/h); 
//     b) 100 reais, se o motorista ultrapassar de 11 a 30 km/h a velocidade permitida. c) 200 reais, se estiver
//     acima de 31km/h da velocidade permitida.

const velocidadePerm = parseInt(prompt("Digite a velocidade máxima permitida em km/h : "));
const velocidadeMax = parseInt(prompt("Digite a velocidade do motorista em km/h : "));

if (velocidadeMax > velocidadePerm && velocidadeMax <= (velocidadePerm + 10)){
    alert("Multa de 50 reais");
} else if (velocidadeMax >= (velocidadePerm + 11) & velocidadeMax <= (velocidadePerm + 30)) {
    alert("Multa de 100 reais");
} else if (velocidadeMax > (velocidadePerm + 31)){
    alert("Multa de 200 reais");
} else {
    alert("Sem multas")
}
