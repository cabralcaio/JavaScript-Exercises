const quantidadeLitros = parseFloat(prompt("Digite a quantidade de litros:"));
const tipoCombustivel = prompt("Digite o tipo do combustível:\n" + "A - Álcool\n" + "G - Gasolina");

if (tipoCombustivel == "A"){
    if(quantidadeLitros > 25){
        const precoFinal = quantidadeLitros * 1.9 * 0.96;
        alert("O valor total a ser pago: " + precoFinal.toFixed());
    } else {
        const precoFinal = quantidadeLitros * 1.9 * 0.98;
        alert("O valor total a ser pago: " + precoFinal.toFixed());
    }
} else{
    if(quantidadeLitros > 25){
        const precoFinal = quantidadeLitros * 2.7 * 0.95;
        alert("O valor total a ser pago: " + precoFinal.toFixed());
    } else {
        const precoFinal = quantidadeLitros * 2.7 * 0.97;
        alert("O valor total a ser pago: " + precoFinal.toFixed());
    }
}