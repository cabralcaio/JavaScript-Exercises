// 10. Uma Cia de pulverização utiliza avião para pulverizar lavouras. Os custos de
// pulverização dependem do tipo de praga e da área a ser contratada conforme a tabela:
// Tipo 1 – ervas daninhas R$ 50,00 por acre;
// Tipo 2 – gafanhotos R$ 100,00 por acre;
// Tipo 3 – broca R$ 150,00 por acre;
// Tipo 4 – todos acima R$ 250,00 por acre.
// Se a área a ser pulverizada for superior a 1000 acres, o fazendeiro tem um desconto de
// 5%. Em adição, qualquer fazendeiro cujo custo for maior do que R$ 750,00 tem um
// desconto de 10% sobre o valor que ultrapassar os R$ 750,00. Caso ambos os descontos se
// aplicam o da área é calculado antes. Fazer um algoritmo que leia: o tipo de pulverização
// (1 a 4) e área a ser pulverizada; e imprima o valor a ser pago.

const tipo = parseInt(prompt("Digite o tipo de pulverização : \n Digite 1 para ervas daninhas R$ 50,00 por acre;\n Digite 2 para  gafanhotos R$ 100,00 por acre;\n Digite 3 para  broca R$ 150,00 por acre;\n Digite 4 para  todos acima R$ 250,00 por acre."))
const area = parseInt(prompt("Digite a área (em acres) a ser pulverizada: "));
let valorAcre = 0;
let resultado = 0;

switch (tipo){
    case 1 :
        valorAcre = 50;
        break;
    case 2 :
        valorAcre = 100;
        break;
    case 3 :
        valorAcre = 150;
        break;
    case 4 :
        valorAcre = 250;
        break;
    default:
        alert("Opção inválida. Atualize e tente novamente")
        break;
}

if(area > 1000){
    resultado = (((valorAcre * area * 0.95) - 750) * 0.9) + 750;
} else {
    if(area * valorAcre > 750) {
        resultado = ((area * valorAcre - 750) * 0.9) + 750;
    } else {
        resultado = area * valorAcre
    }
}

alert("o valor a ser pago é: R$" + resultado)