// Inserir um numero e imprimir no html a tabuada desse numero

let botao = document.getElementById("btn")


botao.addEventListener("click", function () {
    let numero = parseInt(document.getElementById("numero").value)
    console.log(numero)
    let resultado
    console.log(numero)
    for(let i = 1; i <=10; i++) {
        resultado = numero * i
        console.log(resultado)
    }
})


    