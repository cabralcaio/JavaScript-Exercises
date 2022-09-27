// Crie um algortimo que recebe informações de 15 produtos. Cada produto possui nome, 
// marca, uma foto (link de uma imagem da internet), preço unitário e a quantidade de produtos em estoque. 
// Ao receber essas informações dos produtos, imprima no HTML essas informações de cada produto e o produto
// entre o preço e a quantidade de produtos em estoque (preço total).
let estoque = [];
const produto = {
    nome: "default",
    marca: "default",
    foto:  "default",
    preco: 0,
    quantidade: 0
}

for (let i = 1; i <= 15; i ++){ //loop para receber todos os 15 itens do estoque
    produto.nome = prompt("Digite o nome do produto: ");
    produto.marca = prompt("Digite a marca do(a)" + produto.nome);
    produto.foto = prompt("Digite a foto do(a)" + produto.nome);
    produto.preco = prompt("Digite o preço do produto:(a)" + produto.nome);
    produto.quantidade = prompt("Digite a quantidade em estoque do(a)" + produto.nome);

    estoque.push(produto);
}

for (let j = 1; j <=15; j++) {
    let nome = estoque[0].nome
    let marca = estoque[0].marca
    let foto = estoque[0].foto
    let preco = estoque[0].preco
    let quantidade = estoque[0].quantidade
    document.write(`<p>nome: ${nome}</p>`);
    document.write(`<p>marca: ${marca}</p>`);
    document.write(`<p>foto: <img src="${foto}" alt="produto"></p>`);
    document.write(`<p>preço ${preco}</p>`);
    document.write(`<p>quantidade: ${quantidade}</p>`);
    document.write("<br><br><hr>")
}